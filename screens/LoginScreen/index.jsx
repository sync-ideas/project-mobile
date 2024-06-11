import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
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
  const [areDisabled, setAreDisabled] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

  const checkBlockStatus = async () => {
    const blockTime = await AsyncStorage.getItem('blockTime');
    if (blockTime && new Date().getTime() - parseInt(blockTime) < 30 * 60 * 1000) {
      setIsBlocked(true);
      setError('Tu cuenta ha sido bloqueada temporalmente por 30 minutos. Una vez pasado este periodo podrás volver a iniciar sesión.');
    } else {
      await AsyncStorage.removeItem('blockTime');
      setIsBlocked(false);
    }
  };

  const loadCredentials = async () => {
    try {
      const savedEmail = await AsyncStorage.getItem('email');
      const savedPassword = await AsyncStorage.getItem('password');
      const savedRememberMe = await AsyncStorage.getItem('rememberMe');
      const savedAttempts = await AsyncStorage.getItem('loginAttempts');
      
      if (savedEmail && savedPassword && savedRememberMe === 'true') {
        setEmail(savedEmail);
        setPassword(savedPassword);
        setRememberMe(true);
      }

      setLoginAttempts(parseInt(savedAttempts) || 0);
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
    if (isBlocked) {
      setPasswordError('Tu cuenta sigue bloqueada. Espera a que el tiempo de bloqueo expire.');
      return;
    }
    setEmailError('');
    setPasswordError('');
    if (!validateEmail(email)) {
      console.info('Email error!!!!!!!!!!!!!!!!');
      setEmailError('Ingresa un correo electrónico válido.');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError("La contraseña debe incluir, al menos, una letra mayúscula, una letra minúscula, un número y un carácter especial.");
      return;
    }

    try {
      setAreDisabled(true);
      const response = await axios.post(
        "https://attendance-control.vercel.app/api/users/login",
        {
          email: email,
          password: password,
        }
      );

      console.info('response - handleLogin: ', response);

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
      const attempts = loginAttempts + 1;
      await AsyncStorage.setItem('loginAttempts', attempts.toString());
      if (attempts >= 3) {
        setPasswordError('Tu cuenta ha sido bloqueada temporalmente por 30 minutos. Una vez pasado este periodo podrás volver a iniciar sesión.');
        const blockTime = new Date().getTime();
        await AsyncStorage.setItem('blockTime', blockTime.toString());
        setIsBlocked(true);
      } else if (attempts === 2) {
        setPasswordError('Contraseña incorrecta. Te queda 1 intento. Si fallas otra vez tu cuenta será bloqueada temporalmente por 30 minutos.');
      } else {
        setPasswordError(`Contraseña incorrecta. Te quedan ${3 - attempts} intentos`);
      }

      setLoginAttempts(attempts);
    } finally {
      setAreDisabled(false);
    }
  };

  useEffect(() => {
    loadCredentials();
    checkBlockStatus();
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
          readOnly={areDisabled}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Ingresa tu contraseña"
          placeholderTextColor="#63318a"
          secureTextEntry={true}
          readOnly={areDisabled}
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      </View>
      <View style={styles.rememberMeContainer}>
        <Checkbox
          disabled={false}
          value={rememberMe}
          color="#63318a"
          onValueChange={(newValue) => setRememberMe(newValue)}
        />
        <Text style={styles.rememberMeText}>Recordarme</Text>
      </View>
      <TouchableOpacity 
        style={styles.button}
        disabled={!email || !password}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={areDisabled}
        onPress={() => navigation.navigate("ResetPassword")}
      >
        <Text style={styles.forgotPasswordText}>He olvidado mi contraseña</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;