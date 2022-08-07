/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import historyVersions from '@site/versions.json'

import gitVersions from '@site/library/GIT_VERSIONS.json'

import {me, meCustom} from '../me'


export const getGithubRepoUrl = (): string =>
  `https://github.com/${me.organizationName}/${me.projectName}`;

export const getGithubRepoWebsiteUrl = (): string =>
  `https://github.com/${me.organizationName}/${meCustom.projectWebsiteMame}`;

export const getGithubRepoLibraryUrl = (): string =>
  `https://github.com/${me.organizationName}/${meCustom.projectLibraryName}`;

export const getGithubEditUrl = (): string =>
  `${getGithubRepoUrl()}/edit/master/`;

export const getLatestVersion = (): string =>
  gitVersions[0].version


export default ({
  getGithubRepoUrl,
  getGithubEditUrl,
  getGithubRepoWebsiteUrl,
  getGithubRepoLibraryUrl,
  historyVersions,
})
