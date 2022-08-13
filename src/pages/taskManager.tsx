/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState} from "react";

import _ from "lodash";

import {Card} from "antd";

/**
 * search history:
 * - https://www.google.com/search?q=react+draggable+from+a+list+to+another+list&newwindow=1&sxsrf=ALiCzsaQUju5IBW_2qmaIgWvThCFEc7KAw%3A1659728993188&ei=YXTtYqKTC92e4-EP-u2riA0&ved=0ahUKEwjix7-ovLD5AhVdzzgGHfr2CtEQ4dUDCA4&uact=5&oq=react+draggable+from+a+list+to+another+list&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzoHCAAQRxCwA0oECEEYAEoECEYYAFDOCVjiDmDWD2gDcAF4AIABowGIAd0DkgEDMC4zmAEAoAEByAEIwAEB&sclient=gws-wiz-serp
 * - https://stackoverflow.com/questions/45112313/reactjs-drag-and-drop-between-multiple-lists
 * - https://github.com/atlassian/react-beautiful-dnd
 */
import {
  DragDropContext,
  Draggable,
  Droppable
} from "react-beautiful-dnd";

import useDocusaurusContext
  from "@docusaurus/core/lib/client/exports/useDocusaurusContext";

import Layout from "@theme/Layout";

import {TaskStatus, taskStatuses} from "../ds/task";

import type {ITask} from "../ds/task";


import type {
  DropResult
} from "react-beautiful-dnd";


export interface TaskManagerProps {
  tasks: ITask[]
}

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const arrayRemoveCopy = <T, >(arr: T[], index: number): T[] =>
  [...arr.slice(0, index), ...arr.slice(index + 1)]

const arrayAddCopy = <T, >(arr: T[], index: number, ele: T): T[] =>
  [...arr.slice(0, index), ele, ...arr.slice(index)]

const taskStatus2Color = (status: TaskStatus): string => {
  switch (status) {
    case TaskStatus.pending:
      return '#ccc'
    case TaskStatus.finished:
      return '#696'
    case TaskStatus.started:
      return '#969'
    case TaskStatus.delayed:
      return '#966'
    case TaskStatus.discarded:
      return '#666'
    case TaskStatus.unknown:
    default:
      return 'red'
  }
}

export function TaskManagerPure(props: TaskManagerProps): JSX.Element {
  // pipeline, ref:
  // - https://github.com/lodash/lodash/issues/1459#issuecomment-253969771
  // - https://lodash.com/docs/4.17.15#sortBy
  const [state, setState] = useState(
    _(props.tasks)
      .map(t => {t.status = t.status ?? TaskStatus.pending; return t})
      .groupBy(t => t.status)
      .toPairs()
      .sortBy(item => taskStatuses.indexOf(item[0]))
      .fromPairs()
      .value()
  )

  function onDragEnd(result: DropResult) {
    const {source, destination} = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sId = source.droppableId;
    const dId = destination.droppableId;
    console.log({sId, dId})

    if (sId === dId) {
      const items = reorder(state[sId], source.index, destination.index) as unknown as ITask[];
      setState({...state, [sId]: items});
    } else {
      const dThen = arrayAddCopy(state[dId], destination.index, state[sId][source.index])
      const sThen = arrayRemoveCopy(state[sId], source.index)
      const newState = {...state}
      newState[sId] = sThen
      newState[dId] = dThen
      console.log({sThen, dThen})
      setState(newState)
    }

  }

  return (
    <Layout>

      {/* eslint-disable-next-line react/jsx-no-bind */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{display: "flex", flexWrap: 'wrap'}}>

          {Object.keys(state).map((status: TaskStatus) => (
            <Droppable droppableId={status} key={status} type="TASK">
              {
                (provided) => (
                  <Card title={status}
                        ref={provided.innerRef} {...provided.droppableProps}
                        style={{background: taskStatus2Color(status)}}
                        bodyStyle={{maxHeight: '300px', overflow: 'auto'}}
                  >
                    <ul>
                      {Object.values(state[status])
                        .map((task, index) => (
                          <Draggable
                            draggableId={task.title.replace(/\s+/g, '-')}
                            index={index}
                            key={task.title}>
                            {
                              (provided2) => (
                                <li key={task.title}
                                    ref={provided2.innerRef} {...provided2.draggableProps} {...provided2.dragHandleProps}>
                                  {task.title}
                                </li>
                              )
                            }
                          </Draggable>
                        ))}
                    </ul>

                  </Card>
                )
              }
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </Layout>
  )
}


export function TaskManager(): JSX.Element {
  const context = useDocusaurusContext()
  const {tasks} = context.siteConfig.customFields as { tasks: ITask[] | undefined }

  return <TaskManagerPure tasks={tasks ?? []}/>
}

export default TaskManager
