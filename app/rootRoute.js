import React from "react";

import HomeScreen from "./HomeScreen";
import MineScreen from "./base/MineScreen";

import SettingsScreen from "./base/SettingsScreen";
import HandleScreen from "./pages/example/HandleScreen";


import LeftItem from './base/navigation/LeftNavItem'

// 所有需要跳转的页面在这里注册
export const Routes = {
    Handle: {
        screen: HandleScreen,
        navigationOptions: ({ navigation }) => ({
            headerLeft: (
                <LeftItem onPress={ ()=>{ navigation.goBack() } }></LeftItem>
            )
        })
    },
    Home: {
        screen: HomeScreen
    },
    Mine: MineScreen,
    Setting: SettingsScreen
};
