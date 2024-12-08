import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
} from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground source={require("../assets/bg.jpg")} style={styles.bg} blurRadius={5}>
      <View style={styles.container}>
        <View style={styles.logoBox}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Text style={styles.text}>Give me whatever you have you piece of shit!</Text>
        </View>
        <View style={styles.btnContainer}>
          <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
          <AppButton title="Sign up" color="secondary" onPress={() => navigation.navigate("Register")} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%"
  },
  btnContainer: {
    padding: 10
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  logoBox: {
    top: "15%",
    height: 100,
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 75,
    height: 50,
  },
  text: {
    color: "white",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default WelcomeScreen;
