import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Logo from "../../assets/logo.png";
import styles from "./styles";

const MessageSentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} height={106} width={106} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.text}>
          Hemos enviado un código a tu correo electrónico para que puedas volver
          a ingresar.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ChangePassword")}
        >
          <Text style={styles.buttonText}>Recupera tu contraseña</Text>
        </TouchableOpacity>
        <View style={styles.backToInitsessionContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text>{`< Volver a Iniciar sesión`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MessageSentScreen;
