"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskStatuses = exports.TaskStatus = void 0;
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["unknown"] = "unknown";
    TaskStatus["pending"] = "pending";
    TaskStatus["started"] = "started";
    TaskStatus["delayed"] = "delayed";
    TaskStatus["finished"] = "finished";
    TaskStatus["discarded"] = "discarded";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
exports.taskStatuses = Object.keys(TaskStatus);
