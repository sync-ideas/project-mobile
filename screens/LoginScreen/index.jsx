import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Switch, Alert } from 'react-native';
import styles from './styles';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        if (email === 'user@email.com' && password === 'NombreDePila123!') {
            Alert.alert('Login Successful', 'You have been successfully logged in!');
            // Aquí agregarías la navegación hacia la pantalla 'INICIO'
        } else {
            Alert.alert('Login Failed', 'Invalid email or password');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>Logo aquí</Text>
            </View>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Ingresa tu nombre de usuario"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Ingresa tu contraseña"
                secureTextEntry={true}
            />
            <View style={styles.rememberMeContainer}>
                <Switch
                    value={rememberMe}
                    onValueChange={setRememberMe}
                />
                <Text style={styles.rememberMeText}>Recordarme</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('Reset Password', 'Link to reset password')}>
                <Text style={styles.forgotPasswordText}>He olvidado mi contraseña</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
