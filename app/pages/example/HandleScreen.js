import React from "react";
import { Text, View, Alert, StyleSheet, ScrollView } from "react-native";

import { List, ListItem, Button } from "react-native-elements";

export default class HandleScreen extends React.Component {
    static navigationOptions = { title: "详情", tabBarVisible: false };

    // 渲染组件时隐藏tabbar
    componentWillMount() {}

    // 销毁组件时显示tabbar
    componentWillUnmount() {}

    buttonTap() {
        Alert.alert(
            "提示",
            "是否确定？",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "取消"
                },
                {
                    text: "确定",
                    onPress: () => {
                        console.log("OK Pressed");
                        this.props.navigation.pop();
                    }
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
                    title="确定"
                    onPress={() => {
                        this.buttonTap();
                    }}
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
