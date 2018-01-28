import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Message = ({ incoming, message }) => (
    <View style={[
        styles.listItem, incoming ?
            styles.incomingMessage :
            styles.outgoingMessage
    ]}>
        <Text>{message}</Text>
    </View>
)

const styles = StyleSheet.create({
    listItem: {
        width: '75%',
        margin: 5,
        padding: 5,
        backgroundColor: 'white',
        borderColor: '#979797',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10
    },
    incomingMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#E1FFC7'
    } 
})

export default Message;