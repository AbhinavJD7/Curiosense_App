import { View, Text , StyleSheet, TextInput, Alert } from 'react-native'
import React , {useState} from 'react'
import InputBox from '../../components/Forms/inputBox';
import SubmitButton from '../../components/Forms/SubmitButton';
import axios from "axios";
const Register = ({navigation}) => {
  //states
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false);
  //function
  //btn funtion
  const handleASubmit = async() => {
    try {
      setLoading(true)
      if(!name || !email || !password ){
        Alert.alert("Please fill all Fields");
        setLoading(false); 
        return;

      }
      setLoading(false);
      const { data } = await axios.post("http://192.168.170.175:8080/api/v1/auth/register", {
        name,
        email,
        password,
      });
      alert(data && data.message);
      navigation.navigate("Login");
      console.log("Register Data==> ", { name, email, password });
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <View style={styles.container}> 
      <Text style={styles.pageTitle}>Register</Text>
      <View style={{marginHorizontal:20}}>
        <InputBox 
        inputTitle={"Name"} value={name} setValue={setName}/>
        
        <InputBox 
        inputTitle={"Email"}
        keyboardType="email-address"
        autoComplete="email"
        value={email}
        setValue={setEmail}
        />
        <InputBox 
        inputTitle={"Password"} 
        secureTextEntry={true}
        autoComplete="password"
        value={password}
        setValue={setPassword}
        />
      </View>    
      {/* <Text>{JSON.stringify({ name, email, password} , null , 4)}</Text> */}
      <SubmitButton 
      btnTitle="Register"
      loading={loading}
      handleASubmit={handleASubmit}
      />
      <Text style={styles.linkText}>
        Already Registered,
        <Text style={styles.link} onPress={() => navigation.navigate("Login")}> LOGIN</Text>

      </Text>
   </View>
  );
};

const styles = StyleSheet.create({
    container:{   
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#e1d5c9",
        
    },
    pageTitle:{
      fontSize: 40,
      fontWeight: "bold",
      textAlign: "center",
    },
    inputBox:{
      height: 40,
      marginBottom: 20,
      backgroundColor: "#ffffff",
      borderRadius: 10,
      paddingLeft: 10,
      color: "#af9f85",
   
    },
    linkText:{
      textAlign: "center",
    }, 
    link:{
      color: 'red'
    }
});


export default Register