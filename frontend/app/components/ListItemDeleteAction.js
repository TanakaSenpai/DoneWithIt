import React from 'react'
import { StyleSheet, View } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons"

import colors from '../configs/colors'
import { TouchableOpacity } from 'react-native'

function ListItemDeleteAction({onPress}) {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color={colors.white}
        />
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ListItemDeleteAction
