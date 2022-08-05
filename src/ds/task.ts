/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export enum TaskStatus {
  unknown="unknown",
  pending="pending",
  started="started",
  delayed="delayed",
  finished="finished",
  discarded="discarded",
}

export const taskStatuses = Object.keys(TaskStatus)

export interface ITask {
  title: string
  dates: Date[]
  status: TaskStatus
  reason?: string // todo
  category: string // todo
  tags: string[]
  detail: string
}