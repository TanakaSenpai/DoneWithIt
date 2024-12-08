import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import AppText from '../components/AppText'
import colors from '../configs/colors'
import ListItem from '../components/ListItem'

function ListingDetailsScreen({route}) {
    const listing = route.params
  return (
      <View style={styles.container}>
          <Image source={listing.images[0]} style={styles.img} />
          <View style={styles.textContainer}>
              <AppText style={styles.title}>{listing.title}</AppText>
              <AppText style={styles.price}>{listing.price}</AppText>
          </View>
          <View style={styles.userContainer}>
              <ListItem image={require("../assets/face.jpg")} title="Senpai" subTitle="5 Listings" />
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1
    },
    img: {
        width: "100%",
        height: 250
    },
    textContainer: {
        padding: 20
    },
    title: {
        marginBottom: 10,
        fontWeight: "600",
        fontSize: 24
    },
    price: {
        fontWeight: "bold",
        color: colors.secondary
    },
    userContainer: {
        marginTop: 40,
        flex: 1,
    }
})

export default ListingDetailsScreen
