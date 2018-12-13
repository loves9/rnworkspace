import React from "react";
import { Text, View, Alert, Button } from "react-native";
import { List, ListItem } from "react-native-elements";

import { ScreenHeight, ScreenWidth } from "./util/index";

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

        // for (let index = 0; index < 20; index++) {
        //     item.index = index
        //     list.push(item)
        // }
    }

    onItemClcik(i) {
        // console.log(item)
        this.props.navigation.push("Handle", { index: i });
        // Alert.alert(
        //     "Alert Title",
        //     "My Alert Msg",
        //     [
        //         {
        //             text: "Ask me later",
        //             onPress: () => console.log("Ask me later pressed")
        //         },
        //         {
        //             text: "Cancel",
        //             onPress: () => console.log("Cancel Pressed"),
        //             style: "cancel"
        //         },
        //         {
        //             text: "OK",
        //             onPress: () => console.log("OK Pressed")
        //         }
        //     ],
        //     { cancelable: false }
        // );
    }

    render() {
        return (
            <View
                style={
                    { flex: 1, alignItems: "center" } // justifyContent: "center",
                }
            >
                {/* <Text>Home!!!!!!!!</Text>
                <Button onPress={() => { this.onItemClcik(1) }} title="确定"></Button> */}
                <List containerStyle={{ flex: 1, width: ScreenWidth }}>
                    {list.map(l => (
                        <ListItem // roundAvatar
                            // avatar={{ uri: l.avatar_url }}
                            key={l.index}
                            title={l.name}
                            onPress={() => {
                                this.onItemClcik(l);
                            }}
                        />
                    ))}
                </List>
            </View>
        );
    }
}
