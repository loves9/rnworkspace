'use strict';

import { Dimensions } from 'react-native'

export const ScreenHeight = Dimensions.get("window").height;
export const ScreenWidth = Dimensions.get("window").width;

const basePx = 375

export default function px2dp(px) {
    return px * deviceW / basePx
}
