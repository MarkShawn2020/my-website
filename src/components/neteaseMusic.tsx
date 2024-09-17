/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

export interface INeteaseMusicIFrame {
  id: number;
  userid?: number
}

export const NeteaseMusicIFrame = (props: INeteaseMusicIFrame): JSX.Element => (
  <iframe
    title="netease music"
    frameBorder="no"
    marginWidth={0}
    marginHeight={0}
    width="330"
    height="86"
    src={`//music.163.com/outchain/player?type=2&id=${props.id}&auto=1&height=66`}
  />
)

export default NeteaseMusicIFrame;
