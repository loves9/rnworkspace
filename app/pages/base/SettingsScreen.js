import React from "react";
import { Text, View, Alert, Button } from "react-native";

export default class SettingsScreen extends React.Component {
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
