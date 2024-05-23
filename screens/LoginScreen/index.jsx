import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import Checkbox from 'expo-checkbox';

import axios from "axios";
import { validateEmail } from "../../helpers/validateEmail";
import { validatePassword } from "../../helpers/validatePassword";
import Logo from '../../assets/logo.png'
import styles from "./styles";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  console.info('navigation - login:', navigation);

  const handleLogin = async () => {
    console.info('email - login:', email);
    console.info('password - login:', password);
    if (!validateEmail(email)) {
      Alert.alert("Email inválido", "Por favor ingresa un email valido.");
      return;
    }

    if (!validatePassword(password)) {
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
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={Logo}
          height={106}
          width={106}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Usuario</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Ingresa tu nombre de usuario"
          placeholderTextColor="#63318a"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Ingresa tu contraseña"
          placeholderTextColor="#63318a"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.rememberMeContainer}>
        <Checkbox
          disabled={false}
          value={toggleCheckBox}
          color="#63318a"
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
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
