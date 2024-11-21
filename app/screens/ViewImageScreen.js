import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../configs/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeBtn}>
        <MaterialCommunityIcons name="close" size={30} color="white" />
      </View>
      <View style={styles.delBtn}>
        <MaterialCommunityIcons name="trash-can-outline" size={30} color="white" />
      </View>
      <Image
        source={require("../assets/bg.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    width: '100%'
  },
  closeBtn: {
    position: "absolute",
    backgroundColor: colors.primary,
    top: 10,
    right: 20,
    zIndex: 10,
    borderRadius: 3,
    padding: 3
  },
  delBtn: {
    position: "absolute",
    backgroundColor: colors.secondary,
    top: 10,
    left: 20,
    zIndex: 10,
    borderRadius: 3,
    padding: 3
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
