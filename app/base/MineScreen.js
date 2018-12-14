import React from "react";
import { Text, View, Alert, Button } from "react-native";
import { Container, Header, Content, Tab, Tabs } from "native-base";
import { Avatar } from "react-native-elements";
export default class MineScreen extends React.Component {
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
                        <Text style={{ color: "#999999", marginTop: 5 }}>
                            华融/华融科技/软件开发部
                        </Text>
                    </View>
                </View>
                <Container>
                    {/* <Header hasTabs /> */}
                    <Tabs>
                        <Tab heading="待服务">
                            <Text>待服务</Text>
                        </Tab>
                        <Tab heading="服务记录">
                            <Text>服务记录</Text>
                        </Tab>
                    </Tabs>
                </Container>
            </View>
        );
    }
}
