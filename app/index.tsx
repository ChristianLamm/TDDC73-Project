import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native"
import React, { useState } from "react"
import { Colors } from "react-native/Libraries/NewAppScreen"
import TestPassword from "@/components/TestPassword"

export default function Index() {
  const [password, setPassword] = useState("")

  const handleInputChange = (text: string) => {
    setPassword(text)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#1a1a1a",
        }}
      >
        <View style={styles.background}>
          <Text style={styles.text}>Test the strength of your password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={handleInputChange}
            placeholder="Insert password..."
            hitSlop={{ top: 20, bottom: 20 }}
          />
          <Text style={styles.text}>Strength of password:</Text>
          <TestPassword testPassword={password} textColor="#ffffff" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    fontSize: 16,
    margin: 12,
    marginTop: 10,
    width: "60%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 8,
    color: "#ffffff",
  },
  text: {
    fontSize: 16,
    color: "#ffffff",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 100,
  },
})
