"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLatestVersion = exports.getGithubEditUrl = exports.getGithubRepoLibraryUrl = exports.getGithubRepoWebsiteUrl = exports.getGithubRepoUrl = void 0;
const GIT_VERSIONS_json_1 = __importDefault(require("@site/library/GIT_VERSIONS.json"));
const me_1 = require("../me");
const getGithubRepoUrl = () => `https://github.com/${me_1.me.organizationName}/${me_1.me.projectName}`;
exports.getGithubRepoUrl = getGithubRepoUrl;
const getGithubRepoWebsiteUrl = () => `https://github.com/${me_1.me.organizationName}/${me_1.meCustom.projectWebsiteMame}`;
exports.getGithubRepoWebsiteUrl = getGithubRepoWebsiteUrl;
const getGithubRepoLibraryUrl = () => `https://github.com/${me_1.me.organizationName}/${me_1.meCustom.projectLibraryName}`;
exports.getGithubRepoLibraryUrl = getGithubRepoLibraryUrl;
const getGithubEditUrl = () => `${(0, exports.getGithubRepoUrl)()}/edit/master/`;
exports.getGithubEditUrl = getGithubEditUrl;
const getLatestVersion = () => GIT_VERSIONS_json_1.default[0].version;
exports.getLatestVersion = getLatestVersion;
exports.default = ({
    getGithubRepoUrl: exports.getGithubRepoUrl,
    getGithubEditUrl: exports.getGithubEditUrl,
    getGithubRepoWebsiteUrl: exports.getGithubRepoWebsiteUrl,
    getGithubRepoLibraryUrl: exports.getGithubRepoLibraryUrl,
});
