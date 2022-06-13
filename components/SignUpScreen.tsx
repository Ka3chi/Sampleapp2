import React from 'react';
import {  StyleSheet, View, Text, Image } from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';

import Input from '../reusablecomponents/Input';
import Button from '../reusablecomponents/Button';
import { useTogglePasswordVisibility } from '../reusablecomponents/password';

export default function SignUpInScreen({ navigation }) {
  //Password
  const { passwordVisible, rightIcon, handlePasswordVisible } = useTogglePasswordVisibility();

  //Validations
  const SignUpValidationSchema = yup.object().shape({
    firstname: yup.string().required("FirstName is required"),
    lastname: yup.string().required("LastName is required"),
    email: yup.string().required("Email Address is required").email("Please enter a valid email"),
    password: yup.string().required("Password is required"),
    confirmpassword: yup.string().required("Confirm Password is required").oneOf([yup.ref('password')], 'Your password does not match.')
    
  })


  return (
      <Formik
      validationSchema={SignUpValidationSchema}
      initialValues={{ firstname: '', lastname: '', email: '', password: '', confirmpassword: '', }}
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
        placeholder='First Name' 
        onChangeText={handleChange('firstname')}
        value={values.firstname} 
        label='First Name'
        labelstyle={styles.textlabel}/>

        <Text style={{ fontSize: 20, color: 'red' }}>{errors.firstname}</Text>

        <Input 
        placeholder='Last Name' 
        onChangeText={handleChange('lastname')}
        value={values.lastname} 
        label='Last Name'
        labelstyle={styles.textlabel}/>

        <Text style={{ fontSize: 20, color: 'red' }}>{errors.lastname}</Text>

        <Input 
          placeholder='Email' 
          onChangeText={handleChange('email')}
          value={values.email} 
          Iconname='md-mail'
          iconstyle={styles.icon}/>

        <Text style={{ fontSize: 20, color: 'red' }}>{errors.email}</Text>

        <Input 
      placeholder='Password'
      onChangeText={handleChange('password')}
      value={values.password}
      Iconname='md-lock-closed'
      iconstyle={styles.icon}
      secureTextEntry={passwordVisible}
      Iconnametwo={rightIcon}
      onPress={handlePasswordVisible}
       />

      <Text style={{ fontSize: 20, color: 'red' }}>{errors.password}</Text>

      <Input 
      placeholder='Confirm Password'
      onChangeText={handleChange('confirmpassword')}
      value={values.confirmpassword}
      Iconname='md-lock-closed'
      iconstyle={styles.icon}
      secureTextEntry={passwordVisible}
      Iconnametwo={rightIcon}
      onPress={handlePasswordVisible}
       />

      <Text style={{ fontSize: 20, color: 'red' }}>{errors.confirmpassword}</Text>

        <Button title='Sign Up' onPress={handleSubmit} buttonstyle={styles.btnLogin} textstyle={styles.textlogin} />

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

  },
  textlabel:{
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold'
  }
});


