/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');
const {promises: fs} = require('fs');

const historyVersions = require('../versions.json');
const {me, meCustom} = require('./me');

const getGithubRepoUrl = () =>
  `https://github.com/${me.organizationName}/${me.projectName}`;

const getGithubRepoWebsiteUrl = () =>
  `https://github.com/${me.organizationName}/${meCustom.projectWebsiteMame}`;

const getGithubRepoLibraryUrl = () =>
  `https://github.com/${me.organizationName}/${meCustom.projectLibraryName}`;

const getGithubEditUrl = () => `${getGithubRepoUrl()}/edit/master/`;

async function getLatestVersion() {
  const s = await fs.readFile(
    path.join(__dirname, '../library/VERSION.txt'),
    'utf-8',
  );
  return s.replace(/\s+/g, '');
}

/** @type {Promise<string[]>} */
async function asyncLoadGallery() {
  const images = [];
  const galleryDir = path.resolve(__dirname, '../static/gallery');

  const films = await fs.readdir(galleryDir, {withFileTypes: true});
  for (let film of films) {
    if (film.isDirectory()) {
      const filmDir = path.resolve(galleryDir, film.name);
      const imgs = await fs.readdir(filmDir);
      imgs.forEach((imgName) => {
        const imgPath = path.join('/gallery', film.name, imgName);
        images.push(imgPath);
      });
      console.log(`loaded ${film.name} (${imgs.length} )`);
    }
  }

  console.log(`finally loaded ${images.length} images for Gallery`);
  return images;
}

module.exports = {
  getGithubRepoUrl,
  getGithubEditUrl,
  getGithubRepoWebsiteUrl,
  getGithubRepoLibraryUrl,
  historyVersions,
  getLatestVersion,
  asyncLoadGallery,
};
