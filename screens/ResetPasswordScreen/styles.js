import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
  },
  linkText: {
    color: '#6200EE',
    marginTop: 20,
  },
  label: {
    width: '100%',
    textAlign: 'left',
    marginBottom: 5,
  }
});

export default styles;
