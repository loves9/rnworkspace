import React from "react";
import { Text, View, Alert, Button } from "react-native";

export default class HandleScreen extends React.Component {
    static navigationOptions = { title: "列表" };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#afde44"
                }}
            >
                <Text>handle</Text>
            </View>
        );
    }
}
