import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import images from '../assets';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    
    render() {
        return (
            <ImageBackground
                style={styles.container} source={images.bg}> 
                <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                    <Text>Welcome to Simple Chat</Text>
                    <Button style={styles.button} 
                        title="Navigate to ChatScreen"
                        onPress={() => 
                            this.props.navigation.navigate('chat', { user: 'Ronald' })
                        }
                    />
                </View>
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
    button: {
        padding: 10
    }
});
