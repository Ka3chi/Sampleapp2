import React, { useState } from 'react';
import {  StyleSheet, View, Text, Image, } from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';

import Input from '../reusablecomponents/Input';
import Button from '../reusablecomponents/Button';
import { useTogglePasswordVisibility } from '../reusablecomponents/password';

export default function LogInScreen({ navigation }) {
  //Password
  const { passwordVisible, rightIcon, handlePasswordVisible } = useTogglePasswordVisibility();
  
  //Validations
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string().email("Please enter valid email").required('Email Address is Required'),
    password: yup
      .string().required('Password is required'),
  })


  return (
    
      
      <Formik
      validationSchema={loginValidationSchema}
      initialValues={{ email: '', password: '' }}
      onSubmit={values => console.log(values)}
      >
   {({
     handleChange,
     handleSubmit,
     values,
     errors,
   }) => (

      <View style={styles.container}>
        <Image
                source={require('../assets/background.jpg')}
                style={styles.imagestyle}
                
                />
        <Button Iconname='md-arrow-undo' color='white' buttonstyle={styles.btnback} onPress={() => navigation.navigate('landing')}/>
      <Input 
        placeholder='Please type your email' 
        onChangeText={handleChange('email')}
        value={values.email} 
        Iconname='md-mail'
        iconstyle={styles.icon}/>

      <Text style={{ fontSize: 20, color: 'red' }}>{errors.email}</Text>

      <Input 
      placeholder='Please type your Password'
      onChangeText={handleChange('password')}
      value={values.password}
      Iconname='md-lock-closed'
      iconstyle={styles.icon}
      secureTextEntry={passwordVisible}
      Iconnametwo={rightIcon}
      onPress={handlePasswordVisible}
       />

      <Text style={{ fontSize: 20, color: 'red' }}>{errors.password}</Text>

     <Button title='Login' onPress={handleSubmit} buttonstyle={styles.btnLogin} textstyle={styles.textlogin} Iconname={undefined} color={undefined} iconstyle={undefined} />

      </View>
      
      )}
      </Formik>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  btnback:{
    height: '8%',
    width: '20%',
    position: 'absolute',
    left: 0,
    top: 0,
    marginTop: 50
  },
  icon:{
    marginLeft:20,
    marginRight: 20
  },
  btnLogin:{
    backgroundColor: 'blue',
    borderRadius: 30,
    height: '10%',
    width: '50%',
    paddingBottom: 40,
    marginTop: 20,
    marginBottom: 20
  },
  imagestyle:{
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',

  },
  textlogin:{
    fontWeight: 'bold',
    color: 'white'

  }
});


