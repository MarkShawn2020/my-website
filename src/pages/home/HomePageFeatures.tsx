/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';

import clsx from 'clsx';

import Translate from '@docusaurus/Translate';

import svgMountain from '@site/static/img/undraw_docusaurus_mountain.svg';
import svgTree from '@site/static/img/undraw_docusaurus_tree.svg';
import svgReact from '@site/static/img/undraw_docusaurus_react.svg';

import styles from './HomePageFeatures.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '10-Years Programmer',
    Svg: svgMountain,
    description: (
      <ul>
        <li>
          <Translate>
            Summary: A coder crazy at anything cool.
          </Translate>
        </li>

        <li>
          <Translate>
            Ability: Fullstack / Framework / SLAM / ...
          </Translate>
        </li>

        <li>
          <Translate>
            Langs: Python, TypeScript, C++, VBA, OpenGL ...
          </Translate>
        </li>
      </ul>
    ),
  },
  {
    title: 'Efficiency-Oriented Utilitarian & Dreamer',
    Svg: svgTree,
    description: (
      <>
        <ul>
          <li>
            <Translate>
              Devoted to build a secondary brain based on markdown.
            </Translate>
          </li>

          <li>
            <Translate>
              Full of different, sometimes crazy ideas all the day.
            </Translate>
          </li>

          <li>
            <Translate>
              Keeps learning, keeps coding, keeps thinking & sharing.
            </Translate>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Quantitative Strategies Developer',
    Svg: svgReact,
    description: (
      <ul>

        <li>
          <Translate>
            Fluent with both primary & secondary financial markets.
          </Translate>
        </li>

        <li>
          <Translate>
            Experienced with quantitative strategies development.
          </Translate>
        </li>

        <li>
          <Translate>
            Ambitious to build a system making money automatically.
          </Translate>
        </li>

      </ul>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img"/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
