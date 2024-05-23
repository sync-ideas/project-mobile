import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Switch,
  Alert,
  Image,
} from "react-native";

import axios from "axios";
import { validateEmail } from "../../helpers/validateEmail";
import { validatePassword } from "../../helpers/validatePassword";
import Logo from '../../assets/logo.png'
import styles from "./styles";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  console.info('navigation - login:', navigation);

  const handleLogin = async () => {
    console.info('email - login:', email);
    console.info('password - login:', password);
    if (!validateEmail(email)) {
      Alert.alert("Email inválido", "Por favor ingresa un email valido.");
      return;
    }

    if (!validatePassword(email)) {
      Alert.alert("Contraseña inválida", "La contraseña debe incluir, al menos, una letra mayúscula, una letra minúscula, un número y un carácter especial.");
      return;
    }

  try {
    const response = await axios.post(
      "https://attendance-control.vercel.app/api/users/login",
      {
        email: email,
        password: password,
      }
    );

    console.info('response - login:', response);
    if(response.status === 200) {
      navigation.navigate('Home');
    }
  } catch (error) {
    console.info("Error Login: ", error);
  }



  /*
  const handleLogin = () => {
    console.info('email - login:', email);
    console.info('password - login:', password);
    axios({
      method: 'post',
      url: "https://jsonplaceholder.typicode.com/posts",
      data: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => {
      console.info('response?.data: ', response?.data)
  })
    .catch((error) => {
      console.info('Error in Login: ', error);
    });
  */


    /*
    axios({
      method: "post",
      url: "/user/login",
      data: {
        email: email,
        password: password,
    },
    })
    .then((response) => {
        console.info('response.data: ', response.data)
    });
    */
    /*
    if (email === "user@email.com" && password === "NombreDePila123!") {
      Alert.alert("Login Successful", "You have been successfully logged in!");
      // Aquí agregarías la navegación hacia la pantalla 'INICIO'
    } else {
      Alert.alert("Login Failed", "Invalid email or password");
    }
    */
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={Logo}
        />
      </View>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Ingresa tu nombre de usuario"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Ingresa tu contraseña"
        secureTextEntry={true}
      />
      <View style={styles.rememberMeContainer}>
        <Switch value={rememberMe} onValueChange={setRememberMe} />
        <Text style={styles.rememberMeText}>Recordarme</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Alert.alert("Reset Password", "Link to reset password")}
      >
        <Text style={styles.forgotPasswordText}>He olvidado mi contraseña</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
