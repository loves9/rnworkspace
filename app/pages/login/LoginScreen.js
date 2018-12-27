import React from "react";
import BaseScreen from '../base/BaseScreen'

import { Text, View, Alert, StyleSheet, ScrollView, NativeModules } from "react-native";

import { List, ListItem, Button } from "react-native-elements";

export default class LoginScreen extends BaseScreen {
    
    componentWillMount(){
    }

    render(){
        return (
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: '#f3f3f3'
                }}
            >
            </ScrollView>
        )
    }
}