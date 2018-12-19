import React from "react";
import {
  Modal,
  View,
  Platform,
  DatePickerIOS,
  DatePickerAndroid
} from "react-native";
import { Text } from "native-base";

export default class HRDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      defaultDate: new Date(),
      chosenDate: undefined,
      disabled: true
    };
  }

  componentDidMount = () => {
    this.setState({
      defaultDate: this.props.defaultDate ? this.props.defaultDate : new Date(),
      disabled: this.props.disabled ? true : false
    });
    if (!this.props.placeHolderText && this.props.defaultDate) {
      this.setState({ chosenDate: this.props.defaultDate })
    }
  };

  setDate(date) {
    this.setState({ chosenDate: new Date(date) });
    if (this.props.onDateChange) {
      this.props.onDateChange(date);
    }
  }

  showDatePicker() {
    if (Platform.OS === "android") {
      this.openAndroidDatePicker();
    } else {
      this.setState({ modalVisible: true });
    }
  }

  async openAndroidDatePicker() {
    try {
      const newDate = await DatePickerAndroid.open({
        date: this.state.chosenDate
          ? this.state.chosenDate
          : this.state.defaultDate,
        minDate: this.props.minimumDate,
        maxDate: this.props.maximumDate,
        mode: this.props.androidMode
      });
      const { action, year, month, day } = newDate;
      if (action === "dateSetAction") {
        let selectedDate = new Date(year, month, day);
        this.setState({ chosenDate: selectedDate });
        this.props.onDateChange(selectedDate);
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  }

  formatChosenDate(date) {
    if (this.props.formatChosenDate) {
      return this.props.formatChosenDate(date);
    }
    return [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()     
    ].join("-") + ' ' + date.getHours() + ':00';
  }

  render() {
    return (
      <View>
        <View>
          <Text
            onPress={!this.state.disabled ? this.showDatePicker.bind(this) : undefined}
            style={[
              { padding: 10, color: '#333333', textAlign: 'right' },
              this.state.chosenDate ? this.props.textStyle : this.props.placeHolderTextStyle
            ]}
          >
            {this.state.chosenDate
              ? this.formatChosenDate(this.state.chosenDate)
              : this.props.placeHolderText
                ? this.props.placeHolderText
                : "请选择"}
          </Text>
          <View>
            <Modal
              supportedOrientations={['portrait', 'landscape']}
              animationType={this.props.animationType}
              transparent={this.props.modalTransparent} //from api
              visible={this.state.modalVisible}
              onRequestClose={() => { }}
            >
              <Text
                onPress={() => this.setState({ modalVisible: false })}
                style={{ backgroundColor: 'rgba(178,178,178,0.1)', flex: 1 }}
              />
              <Text style={{color: 'blue', margin: 20}} onPress={() => this.setState({ modalVisible: false })}>完成</Text>
              <DatePickerIOS
                date={
                  this.state.chosenDate
                    ? this.state.chosenDate
                    : this.state.defaultDate
                }
                onDateChange={this.setDate.bind(this)}
                minimumDate={this.props.minimumDate}
                maximumDate={this.props.maximumDate}
                mode="datetime"
                locale={this.props.locale}
                timeZoneOffsetInMinutes={this.props.timeZoneOffsetInMinutes}
              />
            </Modal>
          </View>
        </View>
      </View>
    );
  }
}
