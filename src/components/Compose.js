import React from 'react';
import { View, StyleSheet, Keyboard, Button, TextInput } from 'react-native'

class Compose extends React.Component {
    
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }
    
    state = {
        text: ''
    }
    
    submit(){
        this.props.submit(this.state.text);
        this.setState({ text: '' });
        Keyboard.dismiss();
    }
    
    render(){
        return (
            <View style={styles.compose}>
                <TextInput
                    style={styles.composeText}
                    value={this.state.text}
                    onChangeText={(text) => this.setState({text})}
                    onSubmitEditing={() => this.submit}
                    editable={true}
                    maxLength={64}
                />
                <Button title="Send" onPress={this.submit} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    composeText: {
        width: '85%',
        paddingHorizontal: 5,
        height: 30,
        backgroundColor: 'white',
        borderColor: '#979797',
        borderStyle: 'solid',
        borderWidth: 1,
    },
    compose: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 5
    }
});

export default Compose;