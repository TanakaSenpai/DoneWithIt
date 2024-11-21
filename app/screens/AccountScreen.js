import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import colors from "../configs/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      bgColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      bgColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];
function AccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <ListItem
          image={require("../assets/face.jpg")}
          title="Senpai"
          subTitle="sakifshahedur7@gmail.com"
        />
      </View>
      <View style={styles.itemContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              icon={<Icon name={item.icon.name} bgColor={item.icon.bgColor} />}
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title="Logout"
        icon={<Icon name="logout" bgColor="#ffe66d" />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  itemContainer: {
    marginVertical: 20,
    flexDirection: "row",
  },
});

export default AccountScreen;
