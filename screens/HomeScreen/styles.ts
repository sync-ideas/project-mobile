import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#63318A',
    height: 90,
    marginTop: 30,
    paddingHorizontal: 16,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 75,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#362B3E', 
    paddingVertical: 10,
  },
  content: {
    // paddingVertical: 20,
  },
  classContainer: {
    backgroundColor: '#FCFCFC',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    borderColor: '#8347B2',
    borderWidth: 1,
  },
  currentClassTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F8B58', 
    marginBottom: 8,
  },
  courseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  courseText: {
    fontSize: 16,
    marginBottom: 5,
  },
  currentCourseText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nextClassTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EB5B26', 
    marginBottom: 8,
  },
  modifyAttendance: {
    backgroundColor: '#EDE9FE',
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#6D28D9',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
