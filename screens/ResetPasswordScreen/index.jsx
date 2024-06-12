import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert,
  Image,
} from "react-native";
import Logo from '../../assets/logo.png'
import axios from "axios";
import styles from "./styles";

const ResetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleSendResetEmail = async () => {
    try {
      const response = await axios.post(
        "https://attendance-control.vercel.app/api/users/forgotpassword",
        { email }
      );
      if (response.data.result) {
        navigation.navigate("MessageSent");
      } else {
        Alert.alert("Error", response.data.message || "No se pudo enviar el email.");
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo procesar la solicitud.");
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
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Ingresa tu correo electrónico"
          keyboardType="email-address"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSendResetEmail}>
        <Text style={styles.buttonText}>Recuperar acceso</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.backLoginText}>Volver a Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResetPasswordScreen;
