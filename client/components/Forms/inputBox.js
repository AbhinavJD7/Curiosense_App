import { View, Text , TextInput , StyleSheet } from 'react-native'
import React , {useState} from 'react'

const InputBox = ({
    inputTitle,
    autoComplete,
    keyboardType,
    secureTextEntry=false,
    value,
    setValue,
}) => {
  return (
    <View>
     <Text>{inputTitle} </Text>
     <TextInput 
     style={styles.inputBox}
     autocorrect={false}
     keyboardType={keyboardType}
     autoComplete={autoComplete}
     secureTextEntry={secureTextEntry}
     value={value}
     onChangeText={(text)=> setValue(text)}
     />  
    </View>
  )
}
const styles = StyleSheet.create({
    inputBox:{
      height: 40,
      marginBottom: 20,
      backgroundColor: "#ffffff",
      borderRadius: 10,
      paddingLeft: 10,
      color: "#af9f85",
   
    },
});

export default InputBox 