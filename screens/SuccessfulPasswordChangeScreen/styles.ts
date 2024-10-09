import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
  },
  logoContainer: {
    marginBottom: 60,
  },
  formContainer: {
    alignItems: "flex-start",
    width: "100%",
    marginLeft: 82,
  },
  button: {
    backgroundColor: "#63318a",
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: "80%",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  text: {
    width: "80%",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default styles;