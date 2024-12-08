import React from 'react';
import { StyleSheet, TouchableOpacity } from'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"

import colors from '../configs/colors';

const NewListingButton = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <MaterialCommunityIcons name='plus-circle' color={colors.white} size={40} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 40,
        bottom: 30,
        borderColor: colors.white,
        borderWidth: 10
    }
});

export default NewListingButton;