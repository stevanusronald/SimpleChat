import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to Simple Chat</Text>
                <Button style={styles.button} 
                    title="Navigate to ChatScreen"
                    onPress={() => 
                        this.props.navigation.navigate('chat', { user: 'Ronald' })
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 10
    }
});
