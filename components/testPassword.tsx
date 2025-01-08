import React, { useEffect, useState } from "react";
import { View, TextInput, Text, StyleSheet, Switch } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

//password as arg

const TestPassword = ({ testPassword }: { testPassword: string }) => {
  console.log(testPassword);
  const [strength, setStrength] = useState<string>("");

  const calcStrength = (testPassword: string) => {
    let strengthLevel = "";

    const attributes = {
      length: /.{8,}/,
      lengthPlus: /.{12,}/,
      gotNumber: /[0-9]/,
      lowCase: /[a-z]/,
      highCase: /[A-Z]/,
      specChar: /[!@¤%&/{}()+?´'*§]/,
    };

    let points = 0;

    if (attributes.length.test(testPassword)) points++;
    if (attributes.lengthPlus.test(testPassword)) points++;
    if (attributes.gotNumber.test(testPassword)) points++;
    if (attributes.lowCase.test(testPassword)) points++;
    if (attributes.highCase.test(testPassword)) points++;
    if (attributes.specChar.test(testPassword)) points++;

    switch (points) {
      case 0:
        strengthLevel = "Too Short";
        break;
      case 1:
      case 2:
        strengthLevel = "Weak";
        break;
      case 3:
      case 4:
        strengthLevel = "Medium";
        break;
      case 5:
      case 6:
        strengthLevel = "Strong";
        break;
      default:
        strengthLevel = "";
        break;
    }
    setStrength(strengthLevel);
  };

  useEffect(() => {
    calcStrength(testPassword);
  }, [testPassword]);

  const strengthColor = (): readonly [string, string] => {
    switch (strength) {
      case "Too Short":
        return ["#FF4D4D", "#FF4D4D"] as const;
      case "Weak":
        return ["#FFA500", "#FFD700"] as const;
      case "Medium":
        return ["#FFC107", "#4CAF50"] as const;
      case "Strong":
        return ["#4CAF50", "#2E7D32"] as const;
      default:
        return ["#E0E0E0", "#BDBDBD"] as const;
    }
  };

  const strengthWidth = (): number => {
    switch (strength) {
      case "Too Short":
        return 50;
      case "Weak":
        return 100;
      case "Medium":
        return 200;
      case "Strong":
        return 300;
      default:
        return 0;
    }
  };

  return (
    <View>
      <Text style={styles.textStyle}> {strength}</Text>
      {/*<LinearGradient style={styles.gradient} colors={strengthColor()} />*/}
      <LinearGradient
        colors={strengthColor()}
        style={[styles.bar, { width: `${strengthWidth()}%` }]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    paddingTop: 5,
  },
  bar: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#d3d3d3",
    //width: 40,
  },
  gradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});

export default TestPassword;
