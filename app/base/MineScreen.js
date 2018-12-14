import React from "react";
import { Text, View, Alert, Button } from "react-native";

export default class MineScreen extends React.Component {
    static navigationOptions = {
        title: "我的"
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#f3f3f3",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text>MineScreen!</Text>
            </View>
        );
    }
}
