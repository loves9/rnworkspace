import React from "react";
import { Text, View, Alert, Button } from "react-native";

import LeftItem from './navigation/LeftNavItem'

export default class BaseScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <LeftItem onPress={ ()=>{ navigation.goBack() } }></LeftItem>
        ),

        title: navigation.state.params.title
    })

    setTitle(title){
        this.props.navigation.setParams({
            title: title
        })
    }

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
