import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Card from "../components/Card";
import { getListings } from "../api/listings";
import Loading from "../components/Loading";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const { data, error, loading, request } = useApi(getListings);

  useEffect(() => {
    request();
  }, []);

  return (
    <View style={styles.container}>
      {error && (
        <>
          <AppText>Couldn't retrieve listings from the server!</AppText>
          <AppButton title="Retry" onPress={() => request()} />
        </>
      )}
      <Loading visible={loading} />
      <FlatList
        data={data}
        keyExtractor={(listing) => listing._id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$"+item.price}
            img={item.images[0].uri}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
});

export default ListingsScreen;
