import React from 'react';
import { StyleSheet, View, ImageBackground, FlatList, ActivityIndicator } from 'react-native';
import images from '../assets'
import { getContacts } from '../services/api';
import Contact from '../components/Contact';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    
    state = {
        contacts: []
    }

    componentDidMount() {
        getContacts().then((contacts) => {
            this.setState({contacts})
        });
    }

    render() {
        return (
            <ImageBackground
                style={styles.container} source={images.bg}> 
                { this.state.contacts.length > 0 ? (
                <FlatList
                    data={this.state.contacts}
                    renderItem={({ item }) =>
                        <Contact navigate={(name) =>
                            this.props.navigation.navigate('chat', { user: name })} {...item}
                        />
                    }
                    keyExtractor={(item, index) => (`chat-${index}`)}
                />
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
    }
});