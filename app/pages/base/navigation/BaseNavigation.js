import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    StackNavigator
} from "react-navigation";

import { Routes } from '../../../rootRoute'

const StackNavigatorConfig = {
    initialRouteName: 'Home',
    // initialRouteParams: { initPara: '初始页面参数' },
    // navigationOptions: {
    //     title: '标题',
    //     headerTitleStyle: { fontSize: 18, color: '#666666' },
    //     headerStyle: { height: 48, backgroundColor: '#fff' },
    // },
    // paths: 'page/main',
    // mode: 'card',
    // headerMode: 'screen',
    // cardStyle: { backgroundColor: "#ffffff" },
    // transitionConfig: (() => ({
    //     screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    // })),
    // onTransitionStart: (() => {
    //     console.log('页面跳转动画开始');
    // }),
    // onTransitionEnd: (() => {
    //     console.log('页面跳转动画结束');
    // })
};

export const Navigator = createStackNavigator(Routes, StackNavigatorConfig);