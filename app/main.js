import React from "react";
import { Text, View } from "react-native";
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import { Navigator } from './base/navigation/BaseNavigation'
import HandleScreen from "./pages/example/HandleScreen";

import MineScreen from "./base/MineScreen";
import SettingsScreen from './base/SettingsScreen'

// class SettingsScreen extends React.Component {
//     static navigationOptions = {
//         title: "设置"
//     };

//     render() {
//         return (
//             <View
//                 style={{
//                     flex: 1,
//                     justifyContent: "center",
//                     alignItems: "center"
//                 }}
//             >
//                 <Text>Settings!</Text>
//             </View>
//         );
//     }
// }

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        Handle: HandleScreen,
        Setting: SettingsScreen
    },
    {
        initialRouteName: "Home"
    }
);
HomeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible
    };
};

const HomeStackT = Navigator;
const MineStack = createStackNavigator({ Mine: MineScreen });



export default createAppContainer(
    createBottomTabNavigator(
        {
            首页: HomeStack,
            我的: MineStack
        },
        {
            defaultNavigationOptions: ({ navigation }) => { 
                const { routeName } = navigation.state;
            
                // let tabBarVisible = false

                // let tabArray = ['首页', '我的']
                // if(tabArray.indexOf(routeName) > -1){
                //     tabBarVisible = true
                // }

                return {
                // tabBarVisible: tabBarVisible,
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    
                    let iconName;
                    if (routeName === "首页") {
                        iconName = `ios-information-circle${
                            focused ? "" : "-outline"
                        }`;
                    } else if (routeName === "我的") {
                        iconName = `ios-contact`;
                    }

                    // You can return any component that you like here! We usually use an
                    // icon component from react-native-vector-icons
                    return (
                        <Ionicons
                            name={iconName}
                            size={horizontal ? 20 : 25}
                            color={tintColor}
                        />
                    );
                }
            }},
            tabBarOptions: {
                activeTintColor: "#0398ff",
                inactiveTintColor: "gray"
            }
        }
    )
);
