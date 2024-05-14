import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
  },
  logoContainer: {
      marginBottom: 20,
  },
  logoText: {
      fontSize: 24,
      fontWeight: 'bold',
  },
  input: {
      width: '80%',
      height: 40,
      marginVertical: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
  },
  rememberMeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
  },
  rememberMeText: {
      marginLeft: 10,
  },
  button: {
      backgroundColor: '#6200EE',
      padding: 10,
      width: '80%',
      alignItems: 'center',
      borderRadius: 5,
      marginTop: 10,
  },
  buttonText: {
      color: '#fff',
      fontSize: 16,
  },
  forgotPasswordText: {
      color: '#6200EE',
      marginTop: 20,
  },
});

export default styles;