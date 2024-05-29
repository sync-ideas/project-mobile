// MessageSentScreen.jsx
import React from "react";
import { 
  View, 
  Text, 
  TouchableOpacity
} from "react-native";

import styles from "./styles";

const MessageSentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Hemos enviado un mensaje a tu correo electrónico para que puedas volver a ingresar.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};
  
  export default MessageSentScreen;


