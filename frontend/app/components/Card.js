import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Image } from "expo-image";

import AppText from "./AppText";
import colors from "../configs/colors";

const Card = ({ img, title, subTitle, onPress }) => {
  
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.cardContainer}>
        <Image
          source={img}
          style={styles.imgCongtainer}
          contentFit="cover"
          cachePolicy="memory-disk"
        />
        <View style={styles.textContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    backgroundColor: "000",
    width: "100%",
    marginBottom: 20,
    overflow: "hidden",
  },
  imgCongtainer: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
