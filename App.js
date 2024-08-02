import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import MessageSentScreen from "./screens/MessageSentScreen/indes";
import ChangePasswordScreen from "./screens/ChangePasswordScreen";
import RecoveryPasswordScreen from "./screens/RecoveryPasswordScreen";
import SuccessfulPasswordChangeScreen from "./screens/SuccessfulPasswordChangeScreen";



const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="ResetPassword" 
          component={ResetPasswordScreen} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="MessageSent" 
          component={MessageSentScreen} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="ChangePassword" 
          component={ChangePasswordScreen} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="RecoveryPassword" 
          component={RecoveryPasswordScreen} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="SuccessfulPasswordChange" 
          component={SuccessfulPasswordChangeScreen} 
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
