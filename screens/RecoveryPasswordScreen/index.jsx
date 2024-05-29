// RecuperarContraseñaScreen.jsx
import React, { useState } from "react";
import { 
  View, 
  TextInput, 
  Text, 
  TouchableOpacity, 
  Alert 
} from "react-native";
import axios from "axios";
import styles from "./styles";

const RecoveryPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleRecuperarAcceso = async () => {
    try {
      const response = await axios.post("https://attendance-control.vercel.app/api/users/forgotpassword", { email });
      if (response.data.result) {
        navigation.navigate('MessageSent');
      } else {
        Alert.alert("Error", response.data.message || "No se pudo enviar el correo.");
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo procesar la solicitud.");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Correo electrónico</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Ingresa tu correo electrónico"
      />
      <TouchableOpacity style={styles.button} onPress={handleRecuperarAcceso}>
        <Text>Recuperar acceso</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Volver a Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecoveryPasswordScreen;
