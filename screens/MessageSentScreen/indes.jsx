import React from "react";
import { 
  View, 
  Text, 
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

const MessageSentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Hemos enviado un código a tu correo electrónico para que puedas volver a ingresar.</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('ChangePassword')}
      >
        <Text>Recupera tu contraseña</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>{`< Volver a Iniciar sesión`}</Text>
      </TouchableOpacity>
    </View>
  );
};
  
  export default MessageSentScreen;


