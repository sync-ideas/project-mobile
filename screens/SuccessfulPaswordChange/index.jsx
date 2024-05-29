import React from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
} from "react-native";
import styles from "./styles";

const SuccessfulChangePasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Haz cambiado exitosamente tu contraseña, ahora puedes volver a iniciar sesión.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessfulChangePasswordScreen;


