import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Button,
    TextInput
} from "react-native";

export default class SelectButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };

        if(props.selected != undefined){
            this.state.selected = props.selected
        }
    }

    updateState(val){
        this.setState({
            selected: val
        })
    }

    buttonClick() {
        this.state.selected = !this.state.selected;
        let selected = this.state.selected

        this.setState(
            {
                selected: selected
            }
        )

        if(this.props.onPress != undefined){
            this.props.onPress(selected, this.props.index)
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
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: this.state.selected? "#298CCF": '#D5d5d5',
                        padding: 10,
                        paddingTop: 5,
                        paddingBottom: 5,
                        borderRadius: 20,
                        width: 64,
                        height: 28
                    }}
                    onPress={()=>{
                        this.buttonClick()
                    }}
                >
                    <Text style={{ 
                        fontSize: 14, 
                        color: this.state.selected? "#fff": '#333333'
                        }}>{ this.props.title }</Text>
                </TouchableOpacity>
            </View>
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
