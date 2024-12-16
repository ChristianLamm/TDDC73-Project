import { Text, TextInput, View } from "react-native";
import PWTest from "@/components/testPassword"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Input your password.</Text>
      <TextInput> . . .</TextInput>
      <PWTest password="textInput" ></PWTest>
      
    </View>
  );
}
