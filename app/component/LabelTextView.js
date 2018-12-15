import React from "react";
import { Text, View, Alert, Button, TextInput } from "react-native";

export default class LabelTextView extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: '' };

        if(!this.props.title){
            this.props.title = ''
        }
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
                <Text style={{ margin: 15, fontSize: 16, width: 70 }}>{ this.props.title }</Text>
                <TextInput
                    style={{ height: 48, paddingRight: 5 }}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    placeholder="请输入手机号"
                    keyboardType="phone-pad"
                />
            </View>
        );
    }
}
