import React from "react";
import { Text, View, Alert, StyleSheet, ScrollView } from "react-native";

import { List, ListItem, Button } from "react-native-elements";

export default class HandleScreen extends React.Component {
    static navigationOptions = { title: "列表", tabBarVisible: false };

    // 渲染组件时隐藏tabbar 
    componentWillMount() {
        this.props.navigation.state.params = {
            tabBarVisible: false
        };
    }

    // 销毁组件时显示tabbar
    componentWillUnmount() {
        this.props.navigation.state.tabBarVisible = true;
    }

    render() {
        return (
            // <View
            //     style={{
            //         flex: 1,
            //         justifyContent: "center",
            //         alignItems: "center",
            //         backgroundColor: "#afde44"
            //     }}
            // >
            //     <Text>handle</Text>
            // </View>

            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Button color="#fff" backgroundColor="#0398ff" title='下一步' />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20
    }
});
