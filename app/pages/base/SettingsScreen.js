import React from "react";
import BaseScreen from './BaseScreen'
import { Text, View, Alert, Button } from "react-native";

export default class SettingsScreen extends BaseScreen {
    static navigationOptions = { title: "设置", tabBarVisible: false };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text>Settings!</Text>
            </View>
        );
    }
}
