import React, { useEffect, useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

//password as arg

const TestPassword = ({ testPassword }: { testPassword: string }) => {
  console.log(testPassword);

  return <Text>The password to be tested is: {testPassword}</Text>;
};
export default TestPassword;
