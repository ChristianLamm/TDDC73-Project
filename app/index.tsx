import { Text, TextInput, View, StyleSheet, Button} from "react-native";
import React, { useState } from 'react'
//import PWTest from "@/components/testPassword"
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Index() {



const [password, setPassword] = useState('');



const handleInputChange = (text: string) => {
  setPassword(text);
  
  
   //alternativ 1: skicka vidare password till testPassword live för att avgöra styrka
};

const confirmButton = () => {

  console.log('Password:', password)
  //alternativ 2: skicka vidare password till testPassword genom att klicka Confirm för att avgöra styrka
}

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Test the strength of your password</Text>
      <TextInput
       style={[styles.input, {color: '#000000'}]}
       value={password}
       onChangeText={handleInputChange}
       placeholder="Insert password..."
       placeholderTextColor='#000000'
       cursorColor='blue'
       selectionColor='#000000'
       
       //color='#000000'
      />
      <Button
      title= 'Confirm'
      onPress={confirmButton}
      /> 

    </View>
  );
};

  const styles = StyleSheet.create({

    input: {

      height: 40,
      margin: 12,
      padding: 20,
      borderColor: '#000000',
      borderWidth: 1,
      width: "60%"
      //textDecorationColor: '#000000',
    },
  
  })

