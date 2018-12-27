import React from "react";
import { Text, View, Alert, StyleSheet, ScrollView, NativeModules } from "react-native";

import { List, ListItem, Button } from "react-native-elements";

export default class HandleScreen extends React.Component {
    static navigationOptions = { title: "详情", tabBarVisible: false };

    // 渲染组件时隐藏tabbar
    componentWillMount() {}

    // 销毁组件时显示tabbar
    componentWillUnmount() {}

    buttonTap() {
        // Alert.alert(
        //     "提示",
        //     "确定提交吗？",
        //     [
        //         {
        //             text: "取消",
        //             onPress: () => console.log("Cancel Pressed"),
        //         },
        //         {
        //             text: "确定",
        //             onPress: () => {
        //                 console.log("OK Pressed");
        //                 this.props.navigation.pop();
        //             }
        //         }
        //     ],
        //     { cancelable: false }
        // );

        let HRPaymentModule = NativeModules.HRPaymentModule;
        HRPaymentModule.WXPayment((error, success, fail)=>{
            
        });
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
