import React from "react";
import {
    Text,
    View,
    Alert,
    Button,
    ScrollView,
    TouchableOpacity,
    StyleSheet
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
import {
    Container,
    Header,
    Content,
    Tab,
    Tabs,
    Item,
    Picker,
    Icon,
    DatePicker
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScreenHeight, ScreenWidth } from "./util/index";

import LabelTextView from "./component/LabelTextView";
import SelectButton from "./component/SelectButton";

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

        this.state = {
            selected2: undefined,

            selectButton1: true,
            selectButton2: false
        };
    }

    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }

    changeAvatar() {
        this.props.navigation.push("Handle");
    }

    onItemClcik(val, index) {
        switch (index) {
            case "1":
                this.state.selectButton2 = false;
                this.refs.selectbutton2.updateState(false);

                break;

            case "2":
                this.state.selectButton1 = true;
                this.refs.selectbutton1.updateState(false);
                break;
        }
    }

    phoneTextChanged(value) {
        console.log(value);
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
                        onPress={() => {
                            this.changeAvatar();
                        }}
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
                <LabelTextView
                    title="联系电话"
                    placeholder="请输入手机号"
                    callBack={value => {
                        this.phoneTextChanged(value);
                    }}
                />
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
                            paddingLeft: 15,
                            marginBottom: 15
                        }}
                    >
                        <SelectButton
                            ref="selectbutton1"
                            title="理发"
                            index="1"
                            selected={this.state.selectButton1}
                            onPress={(value, index) => {
                                this.onItemClcik(value, index);
                            }}
                        />

                        <View style={{ width: 10 }} />

                        <SelectButton
                            ref="selectbutton2"
                            title="护理"
                            index="2"
                            onPress={(value, index) => {
                                this.onItemClcik(value, index);
                            }}
                        />
                    </View>

                    <View style={{ marginLeft: 15 }}>
                        <Divider style={{ backgroundColor: "#f3f3f3" }} />
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                color: "#303133",
                                width: 85,
                                paddingLeft: 15
                            }}
                        >
                            技师
                        </Text>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: ScreenWidth - 85 }}
                            placeholder="随机"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.selected2}
                            onValueChange={this.onValueChange2.bind(this)}
                        >
                            <Picker.Item label="Wallet" value="key0" />
                            <Picker.Item label="ATM Card" value="key1" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4" />
                        </Picker>
                    </View>

                    <View style={{ marginLeft: 15 }}>
                        <Divider style={{ backgroundColor: "#f3f3f3" }} />
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                color: "#303133",
                                width: 85,
                                paddingLeft: 15
                            }}
                        >
                            预约时间
                        </Text>

                        <DatePicker
                            style={{ width: ScreenWidth - 85 }}
                            defaultDate={new Date(2018, 4, 4)}
                            minimumDate={new Date(2018, 1, 1)}
                            maximumDate={new Date(2018, 12, 31)}
                            // locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            // animationType={"dropdown"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                            // textStyle={{ color: "green" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={() => {}}
                        />
                    </View>
                </View>
                <Text style={{ fontSize: 14, margin: 15, color: "#303133" }}>
                    仅可预约7天内的工作日时段
                </Text>

                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text
                        style={{
                            fontSize: 17,
                            color: "#fff"
                        }}
                    >
                        提交预约申请
                    </Text>
                </TouchableOpacity>

                <Text
                    style={{
                        fontSize: 12,
                        marginLeft: 15,
                        marginTop: 20,
                        color: "#298CCF"
                    }}
                >
                    温馨提示:
                </Text>

                <Text
                    style={{
                        fontSize: 12,
                        marginLeft: 15,
                        marginRight: 15,
                        marginTop: 10,
                        color: "#303133"
                    }}
                >
                    1、护理时间为：每天11:00-13:30及16:00-18:00，每个时段各有4个名额。
                </Text>
                <Text
                    style={{
                        fontSize: 12,
                        marginLeft: 15,
                        marginRight: 15,
                        marginTop: 5,
                        color: "#303133"
                    }}
                >
                    2、已预约的服务，尚未完成时，不可重复预约其他服务。
                </Text>
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
        color: "#fff",
        backgroundColor: "#298CCF",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        paddingTop: 5,
        paddingBottom: 5,
        // width: 64,
        height: 48
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
    countText: {
        color: "#FF00FF"
    }
});
