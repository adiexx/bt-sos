import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      zIndex: 0,
      marginTop: 10,
      position: 'relative',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container1: {
      zIndex: 0,
      marginTop: 0,
      position: 'relative',
      flex: 1,
    },
   
    button: {
      margin: 10,
      width: 200,
      height: 200,
      borderRadius: 100,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    },

    button2: {
      margin: 10,
      width: 200,
      height: 200,
      borderRadius: 100,
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 50,
      fontWeight: 'bold',
      color: 'white',
    },

    buttonText2: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
    },
    
    conftext: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'gray',
    },
    buttonconfText: {
      fontSize: 10,
      fontWeight: 'bold',
      color: 'black',
    },
    confirmationContainer1: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    confirmationContainer2: {
      
      justifyContent: 'center',
      alignItems: 'center',
    },
    confirmatioprinc: {
      backgroundColor: 'rgb(240, 240, 240)',
      boxshadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      borderRadius: 10,
      width: 250,
      height: 160,
      position: 'absolute',
      zIndex: 2,
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
    },
    confirmationButton: {
      width: 80,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'gray',
      borderRadius: 10,
    },
    confirmationButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
    secondButton: {
      marginLeft: 18,
    },
    buttonconf: {
      margin: 10,
      zIndex: 1,
      width: 40,
      height: 40,
      borderRadius: 100,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageconf: { 
      width: 30,
      height: 30,
    }
  });

export default styles;