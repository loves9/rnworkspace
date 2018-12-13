import React from "react";
import { Text, View, Alert, Button } from "react-native";

export default class BaseScreen extends React.Component {
    static navigationOptions = {
        title: "base"
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
            </View>
        );
    }
}
