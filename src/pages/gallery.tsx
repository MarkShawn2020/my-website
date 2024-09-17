/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState} from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Layout from '@theme/Layout';

const getFilmName = (imgPath: string): string => imgPath.split('/')[2];

export default (): JSX.Element => {
  const context = useDocusaurusContext();
  const imgs = context.siteConfig.customFields.images as string[];
  const getRandomIndex = () => Math.floor(Math.random() * imgs.length);
  const [index, setIndex] = useState(getRandomIndex());

  return (
    <Layout>
      {imgs.length > 0 && (
        <div style={{position: 'relative'}}>
          <img
            width={'100%'}
            role="presentation"
            src={useBaseUrl(imgs[index])}
            alt={imgs[index]}
            onClick={() => setIndex(getRandomIndex())}
          />

          <p
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              color: 'white',
              fontStyle: 'italic',
              // text readable, ref: https://stackoverflow.com/a/23969012/9422455
              textShadow: 'black 0px 0px 10px',
              fontSize: 20,
            }}>
            source: {getFilmName(imgs[index])}
          </p>

          <p style={{textAlign: 'center', fontStyle: 'italic', color: 'gray'}}>
            click the image itself to see next random page
          </p>
        </div>
      )}
    </Layout>
  );
};
