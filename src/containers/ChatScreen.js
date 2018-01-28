import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import images from '../assets';
import { getMessages, postMessage } from '../services/api';
import Message from '../components/Message';
import Compose from '../components/Compose';

export default class ChatScreen extends React.Component {
  
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.user}`
  });

  state = {
    messages: []
  }

  componentDidMount() {
    getMessages().then((messages) => {
      this.setState({messages})
    });
  }

  render() {
    return (
      <ImageBackground
        style={styles.container} source={images.bg}>
        { this.state.messages.length > 0 ? (
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 100}
          style={styles.container}>
            <FlatList
              data={this.state.messages}
              renderItem={({ item }) =>
                <Message {...item} />
              }
              keyExtractor={(item, index) => (`message-${index}`)}
            />
            <Compose submit={postMessage} />
        </KeyboardAvoidingView>
        ) :
        <View style={{ flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large"/>
        </View>
        }
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    width: '100%'
  },
});
