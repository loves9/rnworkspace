import React from "react";
import { Text, View, Alert, StyleSheet, ScrollView } from "react-native";

import { List, ListItem, Button } from "react-native-elements";

export default class HandleScreen extends React.Component {
    static navigationOptions = { title: "列表", tabBarVisible: false };

    // 渲染组件时隐藏tabbar
    componentWillMount() {}

    // 销毁组件时显示tabbar
    componentWillUnmount() {}

    buttonTap() {
        Alert.alert(
            "提示",
            "确定提交吗？",
            [
                {
                    text: "Ask me later",
                    onPress: () => console.log("Ask me later pressed")
                },
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => console.log("OK Pressed")
                }
            ],
            { cancelable: false }
        );
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Button
                    color="#fff"
                    backgroundColor="#298CCF"
                    title="下一步"
                    onPress={() => {this.buttonTap()}}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20
    }
});
