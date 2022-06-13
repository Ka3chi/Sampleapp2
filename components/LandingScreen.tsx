import React from 'react';
import {  StyleSheet, Text, View, Image } from 'react-native';

import Button from '../reusablecomponents/Button';


export default function LandingScreen({ navigation }) {
  return (
        <View style={styles.container}>
            <Image
                source={require('../assets/background.jpg')}
                style={styles.imagestyle}
                
                />
            <Text style={styles.texttitle}>Welcome to Sample App</Text>
            <Button title='Log In' buttonstyle={styles.btnlogin} textstyle={styles.textlogin} onPress={() => navigation.navigate('Login')} />
            <Button title='Sign Up' buttonstyle={styles.btnsignup} textstyle={styles.textsignup} onPress={() => navigation.navigate('Signup')}/>
        </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texttitle:{
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 50
  },
  btnlogin:{
    backgroundColor: 'blue',
    borderRadius: 20,
    height: '10%',
    width: '50%',
    paddingBottom: 40,
    marginTop: 20,
    marginBottom: 20
  },
  btnsignup:{
    backgroundColor: 'green',
    borderRadius: 20,
    height: '10%',
    width: '50%',
    paddingBottom: 40,
    marginTop: 20,
    marginBottom: 20
  },
  textsignup:{
    color: 'white',
    fontWeight: 'bold'
  },
  textlogin:{
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  imagestyle:{
      height: '100%',
      width: '100%',
      resizeMode: 'cover',
      position: 'absolute',

  }
});
