import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../configs/colors';

function ListItemSeparator() {
  return (
    <View style={styles.separator}></View>
  )
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.lightGray,
  },
});

export default ListItemSeparator
