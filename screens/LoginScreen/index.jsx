import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { validateEmail } from "../../helpers/validateEmail";
import { validatePassword } from "../../helpers/validatePassword";
import Logo from '../../assets/logo.png'
import styles from "./styles";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const loadCredentials = async () => {
    try {
      const savedEmail = await AsyncStorage.getItem('email');
      const savedPassword = await AsyncStorage.getItem('password');
      const savedRememberMe = await AsyncStorage.getItem('rememberMe');
      
      if (savedEmail && savedPassword && savedRememberMe === 'true') {
        setEmail(savedEmail);
        setPassword(savedPassword);
        setRememberMe(true);
      }
    } catch (error) {
      console.error("Falló al cargar las credenciales", error);
    }
  };

  const saveCredentials = async (email, password) => {
    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
      await AsyncStorage.setItem('rememberMe', 'true');
    } catch (error) {
      console.error("Falló al guardar las credenciales", error);
    }
  };

  const clearCredentials = async () => {
    try {
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('password');
      await AsyncStorage.removeItem('rememberMe');
    } catch (error) {
      console.error("Falló al limpiar las credenciales", error);
    }
  };

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

      if(response.status === 200) {
        if (rememberMe) {
          saveCredentials(email, password);
        } else {
          clearCredentials();
        }
        navigation.navigate('Home');
      }
    } catch (error) {
      console.info("Error Login: ", error);
    }
  };

  useEffect(() => {
    loadCredentials();
  }, []);

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
