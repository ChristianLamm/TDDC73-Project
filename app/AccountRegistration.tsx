import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Alert,
} from "react-native"
import React, { useState } from "react"
//import PWTest from "@/components/testPassword"
import { Colors } from "react-native/Libraries/NewAppScreen"
import AccountCreation from "@/components/AccountCreation"

const AccountRegistration = () => {
  // Handle form submission
  const handleAccountCreation = (data: { [key: string]: string }) => {
    Alert.alert("Account Created!", JSON.stringify(data, null, 2))
    console.log("Account Data:", data)
  }

  return (
    <SafeAreaView style={styles.container}>
      <AccountCreation
        accountType="email" // Byt mellan username & email 
        fields={{
          // Välj vilka input fields
          firstName: { show: true, required: false },
          lastName: { show: true, required: false }, // required = false om inget anges
          password: { show: true, required: true },
        }}
        onSubmit={handleAccountCreation}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
})

export default AccountRegistration
