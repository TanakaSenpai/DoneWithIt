import LottieView from "lottie-react-native";
import React from "react";
import { Modal, StyleSheet, View } from "react-native";

const Loading = ({ visible = false }) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.container}>
        <LottieView
          autoPlay
          loop
          style={styles.loading}
          source={require("../assets/lottie/loading.json")}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      opacity: 0.8
    },
    loading: { 
      width: 100, 
      height: 100,
    }
})

export default Loading;
