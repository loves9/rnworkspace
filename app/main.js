import React from 'react';
import { Text, View } from 'react-native';
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    StackNavigator
} from "react-navigation";

import HomeView from './HomeView'

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Setting',
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

class A extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home!',
    };

    // etc..
}

class B extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Settings!',
    };

    // etc..
}

const HomeStack = createStackNavigator({ Home: HomeView });
const SettingsStack = createStackNavigator({ Settings: SettingsScreen });


const TabNavigator = createBottomTabNavigator({
    Home: HomeView,
    Settings: SettingsScreen
});

export default createAppContainer(
    createBottomTabNavigator({
        HomeStack,
        SettingsStack,
    })
);