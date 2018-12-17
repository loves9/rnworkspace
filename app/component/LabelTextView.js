import React from "react";
import { Text, View, Alert, Button, TextInput } from "react-native";

export default class LabelTextView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            placeholder: '请输入',
            title: '电话号码'
        };

        if(props.title != undefined){
            this.state.title = props.title
        }

        if(props.placeholder != undefined){
            this.state.placeholder = props.placeholder
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
                <Text style={{ margin: 15, fontSize: 16, width: 70 }}>{ this.state.title }</Text>
                <TextInput
                    style={{ height: 48 }}
                    onChangeText={text => { 
                        this.setState({ text }) 
                        this.props.callBack(text) 
                    }}
                    value={ this.state.text }
                    placeholder={ this.state.placeholder }
                    keyboardType="phone-pad"
                />
            </View>
        );
    }
}
