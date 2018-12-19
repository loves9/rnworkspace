import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Button,
    TextInput
} from "react-native";

export default class HRButton extends React.Component {
    constructor(props) {
        super(props);

    }

    updateState(val){
    }

    buttonClick() {
        if(this.props.onPress != undefined){
            this.props.onPress()
        }
        
    }

    render() {
        return (
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.props.onPress()
                    }}
                >
                    <Text
                        style={{
                            fontSize: 17,
                            color: "#fff"
                        }}
                    >
                        { this.props.title }
                    </Text>
                </TouchableOpacity>
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
