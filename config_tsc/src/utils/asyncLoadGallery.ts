/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import path from "path";
import {promises as fs} from "fs";

/** @type {Promise<string[]>} */
export async function asyncLoadGallery(): Promise<string[]> {
  const images = [];
  console.log({__dirname})
  const galleryDir = path.resolve(__dirname, '../../../static/gallery');

  const films = await fs.readdir(galleryDir, {withFileTypes: true});
  for (const film of films) {
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

export default asyncLoadGallery
