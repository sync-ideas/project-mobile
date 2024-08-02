import React, { useEffect } from "react";
import { Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StoreEmail = () => {
  useEffect(() => {
    const storeEmail = async () => {
      try {
        await AsyncStorage.setItem("email", "teacherasistencias4@yopmail.com");
        console.log("Email stored successfully");
      } catch (error) {
        console.error("Error storing email:", error);
      }
    };

    storeEmail();
  }, []);

  return <Button title="Store Email" onPress={() => {}} />;
};

export default StoreEmail;
