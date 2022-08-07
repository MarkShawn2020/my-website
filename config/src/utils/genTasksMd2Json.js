"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genTasksMd2Json = void 0;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const fs_1 = require("fs");
const lodash_1 = __importDefault(require("lodash"));
const task_1 = require("@site/src/ds/task");
const todoFilePath = 'library/docs/TODO.md';
console.log(`read todo from file://${todoFilePath}`);
const genTasksMd2Json = async () => {
    const content = await fs_1.promises.readFile(todoFilePath, 'utf-8');
    let colNames = [];
    const tasks = [];
    let matchedLines = 0;
    // console.log({content})
    content
        .split('\n')
        .forEach(line => {
        if (/^\|.*/.test(line)) {
            const matchedCells = line.split('|').filter(Boolean).map(lodash_1.default.trim);
            if (matchedLines === 0) {
                colNames = matchedCells;
            }
            else if (matchedLines > 1) {
                const taskObj = lodash_1.default.zipObject(colNames, matchedCells);
                const task = {
                    ...taskObj,
                    dates: [new Date(taskObj.sDate), new Date(taskObj.eDate)],
                    tags: [taskObj.category],
                    status: task_1.TaskStatus[taskObj.status]
                };
                tasks.push(task);
            }
            matchedLines += 1;
        }
    });
    return tasks;
};
exports.genTasksMd2Json = genTasksMd2Json;
exports.default = exports.genTasksMd2Json;
