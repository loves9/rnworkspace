import {
    Text,
    View,
    Alert,
    Button,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import React from "react";

export default class LeftNavigationItem extends React.Component {
    render() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 15
                }}
            >
                <TouchableOpacity
                    style={{ flexDirection: "row", alignItems: "center" }}
                    onPress={() => {
                        // navigation.goBack()
                        this.props.onPress();
                    }}
                >
                    <Ionicons name="ios-arrow-back" size={20} color="#333333" />

                    <Text
                        style={{
                            fontSize: 16,
                            marginLeft: 10
                        }}
                    >
                        返回
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
