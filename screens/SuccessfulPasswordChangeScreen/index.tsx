import React from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image,
} from "react-native";
import Logo from "../../assets/logo.png";
import styles from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type SuccessfulPasswordChangeScreenProps = {
  navigation: NativeStackNavigationProp<any, any>;
};

const SuccessfulPasswordChangeScreen: React.FC<SuccessfulPasswordChangeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} height={106} width={106} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.text}>
          Has cambiado exitosamente tu contraseña, ahora puedes volver a iniciar sesión.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuccessfulPasswordChangeScreen;
