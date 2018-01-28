import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Avatar = ({imageUri}) => (
    <Image style={ styles.image } source={imageUri}/>
)

const styles = StyleSheet.create({
    image: {
        borderRadius: 40,
        width: 80, 
        height: 80
    }
})

export default Avatar;