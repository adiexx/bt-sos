import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { View, Image, TouchableOpacity, Text, Alert} from 'react-native';
import styles  from './styles/styless';



const ConfirmationButton: React.FC = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showConfirmation2, setShowConfirmation2] = useState(false);
  
  const handleConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleConfirmation2 = () => {
    setShowConfirmation2(true);
  };

  function conf() {
    Alert.alert('* tela de configuração *');
  }
  
  const handleConfirmationResponse = (response: boolean) => {
    setShowConfirmation(false);
    if (response) {

      const sendsms = require('./API/sendapi');
      sendsms()
    } else {
      // Ação a ser executada quando a resposta for "não"
      Alert.alert('Ação cancelada!');
    }
  };

  const handleConfirmationResponse2 = (response: boolean) => {
    setShowConfirmation2(false);
    if (response) {

      const sendsms = require('./API/sendapi2');
      sendsms()
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

      <TouchableOpacity style={styles.button2} onPress={handleConfirmation2}>
        <Text style={styles.buttonText2}>Ferimento</Text>
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

{showConfirmation2 && (

<View style={styles.confirmatioprinc}>

  <View style={styles.confirmationContainer2}>
  <Text style={styles.conftext}>TEM CERTEZA?</Text>
  </View>
  
  <View style={styles.confirmationContainer1}>
  <TouchableOpacity style={styles.confirmationButton} onPress={() => handleConfirmationResponse2(true)}>
    <Text style={styles.confirmationButtonText}>SIM</Text>
  </TouchableOpacity>
  <TouchableOpacity style={[styles.confirmationButton, styles.secondButton]} onPress={() => handleConfirmationResponse2(false)}>
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

