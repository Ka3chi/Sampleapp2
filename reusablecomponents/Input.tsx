import React from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, Iconname, color, iconstyle, labelstyle, textinputstyle, labelinputstyle, onPress, Iconnametwo }:
    {label: any, value: any, onChangeText: any, placeholder: any, secureTextEntry: any, Iconname: any, color: any, iconstyle: any, labelstyle: any, textinputstyle: any, labelinputstyle: any, onPress: any, Iconnametwo: any,}) => {


    return (
        <View style={[textinputstyle, styles.container]}>
            <Ionicons name={Iconname} 
                    size={40} 
                    color={color}
                    style={[iconstyle, styles.icon]} />
            <Text style={[labelstyle, styles.label]}>{label}</Text>
            <TextInput 
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            style={[labelinputstyle, styles.inputstyle]}
            value={value}
            onChangeText={onChangeText}
            />
            <TouchableOpacity onPress={onPress}>
            <Ionicons name={Iconnametwo} 
                    size={40} 
                    color={color}
                    style={[iconstyle, styles.icon]} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '8%',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: 'lightblue',
        marginTop: 5,

    },
    inputstyle: {
        color: 'black',
        padding: 10,
        flex: 1,
        fontSize: 15
    },
    labelstyle: {
        paddingLeft: 20,
        fontSize: 20
        
    },
    icon:{

    },
    label:{

    },
    
});

export default Input;