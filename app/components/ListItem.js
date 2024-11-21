import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import colors from "../configs/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import { Swipeable } from "react-native-gesture-handler"

import AppText from "./AppText";

const ListItem = ({ image, icon, title, subTitle, onPress, renderRightActions }) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
          <View style={styles.container}>
            {icon}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
              {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
            </View>
            <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25} />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    backgroundColor: colors.white
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 35,
    overflow: "hidden",
  },
  subTitle: {
    marginTop: 5,
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
    fontSize: 17,
  },
});

export default ListItem;
