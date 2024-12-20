import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from './Icon'
import AppText from './AppText'

function CategoryPickerItem({item, onPress}) {
  
  return ( 
    <TouchableOpacity style={styles.container} onPress={onPress}>
          <Icon bgColor={item.backgroundColor} name={item.icon} size={80} />
          <AppText style={styles.label}>{ item.label }</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%"
  },
  label: {
    marginTop: 5,
    textAlign: "center"
  }
})

export default CategoryPickerItem
