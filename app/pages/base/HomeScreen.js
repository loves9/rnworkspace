import React from "react";
import {
    Text,
    View,
    Alert,
    Button,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    NativeModules
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
    Toast
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScreenHeight, ScreenWidth } from "../../util/index";

import LabelTextView from "../../component/LabelTextView";
import SelectButton from "../../component/SelectButton";
import DatePicker from '../../component/HRDatePicker'

import HttpBusinessRequest from '../api/api'

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

        this.state = {
            selected2: undefined,

            selectButton1: true,
            selectButton2: false
        };
    }

    componentDidMount(){
    }

    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }

    changeAvatar() {
        // this.props.navigation.push("Handle");
        // Toast.show({
        //     text: "Wrong password!",
        //     buttonText: "Okay",
        //     position: "bottom"
        //   })

        var HRTestModule = NativeModules.HRDialogModule;
        HRTestModule.toast('提交成功！')
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

    nextButton() {
        // this.props.navigation.push("Handle");

        this.sendRequest()
    }

    sendRequest() {
        let request = HttpBusinessRequest.queryMockServer();
        request.complete = () => {
            console.log("complete");
        };
        request.success = (data, status, xhr) => {
            console.log(data);
        };
        request.error = (data, status, xhr) => {
            console.log(data);
        };
        // 发送请求
        request.send();
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
                                // color: "#303133",
                                width: 85,
                                paddingLeft: 15
                            }}
                        >
                            技师
                        </Text>
                        <Picker
                            mode="dropdown"
                            iosIcon={
                                <Icon
                                    name="ios-arrow-forward"
                                    style={{ color: "#D5D5D5" }}
                                />
                            }
                            style={{
                                width: ScreenWidth - 85,
                                justifyContent: "flex-end"
                            }}
                            textStyle={{ color: "#666666" }}
                            placeholder="随机"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            headerBackButtonText="完成"
                            // headerBackButtonTextStyle={{ color: "#000" }}
                            selectedValue={this.state.selected2}
                            onValueChange={this.onValueChange2.bind(this)}
                        >
                            <Picker.Item label="李秀萍" value="key0" />
                            <Picker.Item label="丁轩瑶（已满）" value="key1" />
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
                            alignItems: "center",
                            height: 48
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                // color: "#303133",
                                width: 85,
                                paddingLeft: 15
                            }}
                        >
                            预约时间
                        </Text>

                        <View style={{ width: ScreenWidth - 110, justifyContent: 'flex-end' }}>
                            <DatePicker
                                style={{ width: undefined }}
                                defaultDate={new Date(2018, 11, 16, 8)}
                                minimumDate={new Date(2018, 11, 15, 8)}
                                maximumDate={new Date(2018, 11, 20, 17)}
                                locale={"zh-Hans"}
                                // timeZoneOffsetInMinutes={9}
                                modalTransparent={false}
                                animationType={"slide"}
                                androidMode={"default"}
                                // placeHolderText="请选择"
                                // textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={() => {}}
                            />
                        </View>

                        <Icon
                            name="ios-arrow-forward"
                            style={{ color: "#D5D5D5", fontSize: 22 }}
                        />
                    </View>
                </View>
                <Text style={{ fontSize: 14, margin: 15, color: "#606266" }}>
                    仅可预约7天内的工作日时段
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.nextButton();
                    }}
                >
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
        marginTop: 5,
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
