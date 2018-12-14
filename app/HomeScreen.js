import React from "react";
import {
    Text,
    View,
    Alert,
    Button,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Picker
} from "react-native";
import {
    List,
    ListItem,
    Avatar,
    FormLabel,
    FormInput,
    FormValidationMessage,
    Divider
} from "react-native-elements";

import { ScreenHeight, ScreenWidth } from "./util/index";

import LabelTextView from "./component/LabelTextView";

const list = [
    {
        index: 0,
        name: "费用报销",
        avatar_url:
            "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "Vice President"
    },
    {
        index: 1,
        name: "公文审批",
        avatar_url:
            "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "Vice President"
    }
];

export default class HomeScreen extends React.Component {
    static navigationOptions = { title: "首页" };

    constructor(props) {
        super(props);

        // let item = {
        //     name: '待办-理发师',
        //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        //     subtitle: 'Vice President'
        // }
    }

    onItemClcik() {
        // console.log(item)
        // this.props.navigation.push("Handle");
    }

    render() {
        return (
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#f3f3f3"
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        backgroundColor: "#fff",
                        alignItems: "center"
                    }}
                >
                    <Avatar
                        containerStyle={{ margin: 15 }}
                        medium
                        rounded
                        source={{
                            uri:
                                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                        }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                    <View style={{ flex: 1, flexDirection: "column" }}>
                        <Text style={{ fontSize: 17 }}>周冬雨</Text>
                        <Text style={{ color: "#999999", marginTop: 5 }}>
                            华融/华融科技/软件开发部
                        </Text>
                    </View>
                </View>

                <View style={{ marginLeft: 15 }}>
                    <Divider style={{ backgroundColor: "#f3f3f3" }} />
                </View>

                <LabelTextView />

                <Text style={{ fontSize: 14, color: "#606266", margin: 15 }}>
                    服务预约
                </Text>

                <View
                    style={{
                        flexDirection: "column",
                        backgroundColor: "#fff"
                    }}
                >
                    <Text
                        style={{ fontSize: 14, margin: 15, color: "#303133" }}
                    >
                        服务类型
                    </Text>

                    <View
                        style={{
                            flexDirection: "row",
                            paddingLeft: 15
                        }}
                    >
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.onItemClcik}
                        >
                            <Text style={{ fontSize: 14, color: "#fff" }}>
                                理发
                            </Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={styles.buttonTab}
                            onPress={this.onItemClcik}
                        >
                            <Text style={{ fontSize: 14, color: "#303133" }}>
                                护理
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#298CCF",
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 20,
        width: 64,
        height: 28
    },
    buttonTab: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D5d5d5",
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 20,
        width: 64,
        height: 28,

        marginLeft: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
    countText: {
        color: "#FF00FF"
    }
});
