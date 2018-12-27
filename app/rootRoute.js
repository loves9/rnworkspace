import React from "react";

import HomeScreen from "./pages/base/HomeScreen";
import MineScreen from "./pages/base/MineScreen";

import SettingsScreen from "./pages/base/SettingsScreen";
import HandleScreen from "./pages/example/HandleScreen";

import LeftItem from './pages/base/navigation/LeftNavItem'

// 所有需要跳转的页面在这里注册
export const Routes = {
    Handle: {
        screen: HandleScreen,
        navigationOptions: ({ navigation }) => ({
            headerLeft: (
                <LeftItem onPress={ ()=>{ navigation.goBack() } }></LeftItem>
            ),

            // title: 'ssss'
        })
    },
    Home: {
        screen: HomeScreen
    },
    Mine: MineScreen,
    Setting: SettingsScreen
};
