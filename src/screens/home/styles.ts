
import { StyleSheet } from 'react-native';

const newLocal = '#';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding:30,
  },

  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'left',
    marginTop:50,
    marginBottom:10,
  },

  textDate: {
    color: 'grey',
    fontSize: 20,
    textAlign: 'left',
    marginBottom:40,
  },

  input: {
    flex:1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#ffff',
    padding: 10,
    fontSize: 16,
    marginRight: 20,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 24,
  },

  form: {
    marginTop:32,
    marginBottom:36,
    width:'100%',
    flexDirection: 'row',
    
  },
  listEmptyText:{
    color:'white',
    fontSize: 14,
    textAlign: 'center',
  }
});