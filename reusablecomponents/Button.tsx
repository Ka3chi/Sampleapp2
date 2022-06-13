import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Button = ({ title, onPress, textstyle, buttonstyle, Iconname, color, iconstyle }: { title: any, onPress: any, textstyle: any, buttonstyle: any, Iconname: any, color: any, iconstyle: any}) => {
    return(
        <TouchableOpacity onPress={onPress} style={[buttonstyle, styles.button]}>
          <Ionicons name={Iconname} 
                    size={40} 
                    color={color}
                    style={iconstyle} />
            <Text style={[textstyle, styles.text]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  button:{
    justifyContent: 'center',
    alignItems: 'center',

  },
  text:{
    fontSize: 20,
  }
});

export default Button;