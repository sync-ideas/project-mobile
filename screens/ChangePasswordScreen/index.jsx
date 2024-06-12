import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  Alert 
} from "react-native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./styles";

const ChangePasswordScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');  
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');

  async function loadEmail() {
    try {
      const loadedEmail = await AsyncStorage.getItem('email');
      setEmail(loadedEmail);
    } catch (error) {
      console.error('Error loading email:', error);
    }
  }

  useEffect(() => {
    loadEmail();
  }, []);
  
  const handleSubmit = async () => {
    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await axios.post("https://attendance-control.vercel.app/api/users/resetpassword", {
        password: newPassword,
        email,
        code,
      });

      if (response.data.result) {
        Alert.alert("Éxito", response.data.message, [
          { text: "OK", onPress: () => console.log("Password changed successfully") }
        ]);
        navigation.navigate("SuccessfulPaswordChange");
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
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Cambiar Contraseña</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePasswordScreen;