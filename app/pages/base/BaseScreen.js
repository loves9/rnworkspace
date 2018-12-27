import React from "react";
import { Text, View, Alert, Button } from "react-native";

export default class BaseScreen extends React.Component {
    // static navigationOptions = {
    //     title: "base"
    // };

    easyPush(url, options) {
        var params = {}
        if(options != undefined){
            params = options
        }

        this.props.navigation.push(url, params);
    }

    easyPop() {
        this.props.navigation.pop();
    }

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
