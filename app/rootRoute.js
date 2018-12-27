import React from "react";

import HomeScreen from "./pages/base/HomeScreen";
import MineScreen from "./pages/base/MineScreen";

import SettingsScreen from "./pages/base/SettingsScreen";
import HandleScreen from "./pages/example/HandleScreen";

import LoginScreen from "./pages/login/LoginScreen";


// 所有需要跳转的页面在这里注册
export const Routes = {
    Handle: {
        screen: HandleScreen,
        navigationOptions: {
            title: 'aaaa'
        }
    },
    Home: {
        screen: HomeScreen
    },
    Mine: MineScreen,
    Setting: SettingsScreen,
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            title: '登录'
        }
    }
};
