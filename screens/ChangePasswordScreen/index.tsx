import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import Logo from "../../assets/logo.png";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type TypeChangePasswordScreenProps = {
  navigation: NativeStackNavigationProp<any, any>;
};

export default function ChangePasswordScreen({ navigation }: TypeChangePasswordScreenProps) {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  async function loadEmail() {
    try {
      const loadedEmail = await AsyncStorage.getItem("email");
      console.log("Loaded email from AsyncStorage:", loadedEmail);
      if (loadedEmail) {
        setEmail(loadedEmail);
      } else {
        Alert.alert("Error", "No se pudo cargar el correo electrónico.");
      }
    } catch (error) {
      console.error("Error loading email:", error);
    }
  }

  useEffect(() => {
    loadEmail();
  }, []);

  const handleSubmit = async () => {
    console.log("Email before submit:", email);

    if (!email) {
      Alert.alert("Error", "El correo electrónico no está cargado.");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }

    if (!code) {
      Alert.alert("Error", "El código de verificación es obligatorio.");
      return;
    }

    try {
      const response = await axios.post(
        "https://attendance-control.vercel.app/api/users/resetpassword",
        {
          password: newPassword,
          email,
          code,
        }
      );

      console.log("Response from server:", response.data);

      if (response.data.result) {
        Alert.alert("Éxito", response.data.message, [
          {
            text: "OK",
            onPress: () => console.log("Password changed successfully"),
          },
        ]);
        navigation.navigate("SuccessfulPasswordChange");
      } else {
        Alert.alert("Error", response.data.message);
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      Alert.alert("Error", "No se pudo cambiar la contraseña.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} height={106} width={106} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Código</Text>
        <TextInput
          style={styles.input}
          value={code}
          onChangeText={setCode}
          placeholder="Ingresa el código"
        />
        <Text style={styles.label}>Nueva Contraseña</Text>
        <TextInput
          style={styles.input}
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry
          placeholder="Ingresa la nueva contraseña"
        />
        <Text style={styles.label}>Confirmar Nueva Contraseña</Text>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          placeholder="Confirma la nueva contraseña"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Cambiar Contraseña</Text>
        </TouchableOpacity>
      </View>
      {/* 
      <View>
        <StoreEmail />
      </View>
      */}
    </View>
  );
};

