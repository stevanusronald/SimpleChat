import React from 'react';
import { View, Text } from 'react-native'

const Message = ({ incoming, message }) => (
    <View>
        <Text>{message}</Text>
    </View>
)

export default Message;