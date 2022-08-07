"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncLoadGallery = void 0;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
/** @type {Promise<string[]>} */
async function asyncLoadGallery() {
    const images = [];
    console.log({ __dirname });
    const galleryDir = path_1.default.resolve(__dirname, '../../../static/gallery');
    const films = await fs_1.promises.readdir(galleryDir, { withFileTypes: true });
    for (const film of films) {
        if (film.isDirectory()) {
            const filmDir = path_1.default.resolve(galleryDir, film.name);
            const imgs = await fs_1.promises.readdir(filmDir);
            imgs.forEach((imgName) => {
                const imgPath = path_1.default.join('/gallery', film.name, imgName);
                images.push(imgPath);
            });
            console.log(`loaded ${film.name} (${imgs.length} )`);
        }
    }
    console.log(`finally loaded ${images.length} images for Gallery`);
    return images;
}
exports.asyncLoadGallery = asyncLoadGallery;
exports.default = asyncLoadGallery;
