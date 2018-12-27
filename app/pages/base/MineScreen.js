import React from "react";
import BaseScreen from './BaseScreen'
import { Text, View, Alert, Button } from "react-native";
import {
    Container,
    Header,
    Content,
    Tab,
    Tabs,
    TabHeading,
    StyleProvider,
    List,
    ListItem
} from "native-base";
import { Avatar } from "react-native-elements";

import tabTheme from "../../../native-base-theme/components";

const list = [
    {
        index: 0,
        name: "美发",
        avatar_url:
            "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "已完成",
        title: "李秀萍",
        date: "预约时间：2018-11-26 11:00-11:30"
    },
    {
        index: 1,
        name: "公文审批",
        avatar_url:
            "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "待服务",
        title: "李秀萍",
        date: "预约时间：2018-11-26 11:00-11:30"
    }
];

export default class MineScreen extends BaseScreen {
    static navigationOptions = {
        title: "我的"
    };

    render() {
        return (
            <View
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
                        <Text style={{ color: "#606266", marginTop: 5 }}>
                            华融/华融科技/软件开发部
                        </Text>
                    </View>
                </View>

                <StyleProvider style={tabTheme()}>
                    <Tabs>
                        <Tab
                            heading="待服务"
                            style={{ backgroundColor: "#f3f3f3" }}
                        >
                            <List
                                style={{
                                    flex: 1
                                    // backgroundColor: "#fff"
                                }}
                                dataArray={list}
                                renderRow={item => (
                                    <ListItem
                                        style={{
                                            flexDirection: "row",
                                            flex: 1,
                                            justifyContent: "center",
                                            backgroundColor: "#fff",
                                            marginLeft: 0,
                                            paddingLeft: 15
                                        }}
                                    >
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                flex: 1,
                                                alignItems: "center"
                                            }}
                                        >
                                            <View
                                                style={{
                                                    flexDirection: "column",
                                                    flex: 1
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        color: "#666666",
                                                        fontSize: 14
                                                    }}
                                                >
                                                    {item.title}
                                                </Text>
                                                <Text
                                                    style={{
                                                        color: "#000",
                                                        fontSize: 17,
                                                        marginTop: 15
                                                    }}
                                                >
                                                    {item.name}
                                                </Text>

                                                <Text
                                                    style={{
                                                        color: "#999999",
                                                        fontSize: 12,
                                                        marginTop: 15
                                                    }}
                                                >
                                                    {item.date}
                                                </Text>
                                            </View>

                                            <View
                                                style={{
                                                    borderColor: "#1E4A8D",
                                                    borderWidth: 1,
                                                    borderRadius: 10,
                                                    paddingTop: 2,
                                                    paddingRight: 10,
                                                    paddingBottom: 2,
                                                    paddingLeft: 10,
                                                    marginTop: -50,
                                                    // height: 30,
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        color: "#1E4A8D",
                                                        fontSize: 12
                                                    }}
                                                >
                                                    {item.subtitle}
                                                </Text>
                                            </View>
                                        </View>
                                    </ListItem>
                                )}
                            />
                        </Tab>
                        <Tab
                            heading="服务记录"
                            style={{
                                backgroundColor: "#f3f3f3",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Text>服务记录</Text>
                        </Tab>
                    </Tabs>
                </StyleProvider>
            </View>
        );
    }
}
