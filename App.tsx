import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { View, Image, TouchableOpacity, Text, Alert} from 'react-native';
import styles  from './styles/styless';



const ConfirmationButton: React.FC = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const handleConfirmation = () => {
    setShowConfirmation(true);
  };

  function conf() {
    Alert.alert('* tela de configuração *');
  }
  

  const handleConfirmationResponse = (response: boolean) => {
    setShowConfirmation(false);
    if (response) {

      const sendsms = require('./API/sendapi');
      const sms = sendsms;
      sms()
    } else {
      // Ação a ser executada quando a resposta for "não"
      Alert.alert('Ação cancelada!');
    }
  };

  return (
    
    
    <View style={styles.container1}>
     
    <TouchableOpacity style={styles.buttonconf} onPress={conf}>
  
      <Image style={styles.imageconf}
      source={{uri:'https://img.icons8.com/ios-filled/50/settings.png' }} />
   
      </TouchableOpacity>
    <View style={styles.container}>

     
      
      <TouchableOpacity style={styles.button} onPress={handleConfirmation}>
        <Text style={styles.buttonText}>SOS</Text>
      </TouchableOpacity>
  
      {showConfirmation && (

        <View style={styles.confirmatioprinc}>

          <View style={styles.confirmationContainer2}>
          <Text style={styles.conftext}>TEM CERTEZA?</Text>
          </View>
          
          <View style={styles.confirmationContainer1}>
          <TouchableOpacity style={styles.confirmationButton} onPress={() => handleConfirmationResponse(true)}>
            <Text style={styles.confirmationButtonText}>SIM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.confirmationButton, styles.secondButton]} onPress={() => handleConfirmationResponse(false)}>
            <Text style={styles.confirmationButtonText}>NÃO</Text>
          </TouchableOpacity>
          
          </View>
        </View>
      )}



    </View>
    </View>
  
  );

};





export default ConfirmationButton;

