import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "../components/Card";

const listings = [
  {
    id: 1,
    title: "Beautiful Garden",
    price: "$300",
    image: require("../assets/products/1.jpg"),
  },
  {
    id: 2,
    title: "A Noon Sunset",
    price: "$250",
    image: require("../assets/products/2.jpg"),
  },
  {
    id: 3,
    title: "A Road Sunset",
    price: "$250",
    image: require("../assets/products/3.jpg"),
  },
];
function ListingsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={
          ({item}) => <Card title={item.title} subTitle={item.price} img={item.image} onPress={() => navigation.navigate("ListingDetails", item)} /> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 20
  },
});

export default ListingsScreen;
