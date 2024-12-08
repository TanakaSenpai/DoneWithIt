import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../configs/colors";

export default AppButton = ({ title, onPress, color="primary" }) => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    marginVertical: 8
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
