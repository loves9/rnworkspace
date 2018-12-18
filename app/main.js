import React from "react";
import {
    Text,
    View,
    Alert,
    Button,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from "react-native";

import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Routes } from "./rootRoute";


const HomeStack = createStackNavigator(Routes, {
    initialRouteName: "Home"
});
HomeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

const MineStack = createStackNavigator(Routes, {
    initialRouteName: "Mine"
});
MineStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible
    };
};

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
                            iconName = `ios-home`;
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
                };
            },
            tabBarOptions: {
                activeTintColor: "#0398ff",
                inactiveTintColor: "gray"
            }
        }
    )
);
