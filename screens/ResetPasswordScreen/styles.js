import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logoContainer: {
    marginBottom: 20,
		alignItems: "center",
  },
  formContainer: {
    alignItems: "left",
    width: "100%",
		alignItems: "center",
  },
  label: {
    textAlign: "left",
  },
  input: {
    width: "80%",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#766882",
    padding: 10,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#63318a",
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: "80%",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  backInitSessionTextContainer: {
		width: "80%",
    marginTop: 20,
  },
  backInitSessionText: {
    color: "#766882",
    textAlign: "right",
  },
  errorText: {
    color: "#DE1111",
    textAlign: "center",
    width: "80%",
  },
});

export default styles;
