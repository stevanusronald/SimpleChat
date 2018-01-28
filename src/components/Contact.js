import React  from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Contact = ({ name, preview, navigate, avatarImageUri }) => (
  <TouchableOpacity onPress={() => navigate(name)}>
    <View style={styles.container}>
      <Image style={ styles.image } source={avatarImageUri}/>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.preview}>{preview}</Text>
      </View>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    borderColor: 'rgba(0,0,0,.2)',
    borderBottomWidth: 2
  },
  content: {
    padding: 20,
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15
  },
  preview: {
    paddingTop: 5,
    color: "grey"
  },
  image: {
    borderRadius: 40,
    width: 80, 
    height: 80
  }
})

export default Contact;