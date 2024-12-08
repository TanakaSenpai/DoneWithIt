import React from 'react';
import { View, StyleSheet } from'react-native';
import AppText from './AppText';
import colors from '../configs/colors';
import { useNetInfo } from '@react-native-community/netinfo';

const OfflineNotice = () => {
    const netInfo = useNetInfo();
    if (netInfo.type !== "unknown" && netInfo.isInternetReachable == false)
    return (
        <View style={styles.container}>
            <AppText style={styles.text}>No internet connection</AppText>
        </View>
    );

    return null;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    text: {
        color: colors.white
    }
});

export default OfflineNotice;