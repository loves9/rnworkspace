import React from "react";
import { Text, View, Alert, Button, TextInput } from "react-native";

export default class LabelTextView extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: '' };
    }

    render() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    backgroundColor: "#fff",
                    alignItems: "center"
                }}
            >
                <Text style={{ margin: 15, fontSize: 16 }}>联系电话</Text>
                <TextInput
                    style={{ height: 55, paddingRight: 5 }}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    placeholder="请输入手机号"
                    keyboardType="phone-pad"
                />
            </View>
        );
    }
}
