import HomeScreen from "./HomeScreen";
import MineScreen from './base/MineScreen'

import SettingsScreen from "./base/SettingsScreen";
import HandleScreen from "./pages/example/HandleScreen";


// 所有需要跳转的页面在这里注册
export const Routes = {
    Handle: {
        screen: HandleScreen
    },
    Home: {
        screen: HomeScreen
    },
    Mine: MineScreen,
    Setting: SettingsScreen
};
