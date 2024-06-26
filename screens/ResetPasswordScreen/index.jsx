import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert,
  Image,
} from "react-native";
import Logo from '../../assets/logo.png';
import { validateEmail } from "../../helpers/validateEmail";
import axios from "axios";
import styles from "./styles";

const ResetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState('');

  const handleSendResetEmail = async () => {
    setEmailError('');
    if (!validateEmail(email)) {
      setEmailError('Ingresa un correo electrónico válido.');
      return;
    }

    try {
      const response = await axios.post(
        "https://attendance-control.vercel.app/api/users/forgotpassword",
        { email }
      );
      if (response.data.result) {
        navigation.navigate("MessageSent");
      } 
    } catch (error) {
      setEmailError('Este correo electrónico no está registrado.');
      return;
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
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSendResetEmail}>
        <Text style={styles.buttonText}>Recuperar acceso</Text>
      </TouchableOpacity>
      <View style={styles.backInitSessionTextContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.backInitSessionText}>{`< Volver a Iniciar sesión`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPasswordScreen;
