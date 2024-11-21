import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker";

import colors from '../../configs/colors';
const ImageInput = ({imageUri, onChangeImage}) => {
  
  const [permissionGranted, setPermissionGranted] = useState(false);

      useEffect(() => {
        const getPermission = async () => {
          const { granted } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (granted) {
            setPermissionGranted(true);
          } else {
            alert("You need to enable permission to continue.");
          }
        };

        // Only request permission if it hasn't been granted yet
        if (!permissionGranted) {
          getPermission();
        }
      }, [permissionGranted]);

    const selectImage = async () => {
      try {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: "images",
          quality: 0.5,
        });
        if (!result.canceled) {
          onChangeImage(result.assets[0].uri);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
  const handlePress = () => {
    if (!imageUri) return selectImage()
    else Alert.alert("Delete", "Are you sure that you want to delete the image?", [
    { text: "Yes", onPress: () => onChangeImage(null) },
    { text: "No" },
   ],)
  }

    return (
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
          {!imageUri && (
            <MaterialCommunityIcons
              name="camera"
              size={40}
              color={colors.medium}
            />
          )}
          {imageUri && (
            <Image style={styles.image} source={{ uri: imageUri }} />
          )}
        </View>
      </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: colors.lightGray,
        justifyContent: "center",
        alignItems: "center",
    borderRadius: 15,
        overflow: "hidden"
    },
    image: {
        height: "100%",
        width: "100%"
    }
});

export default ImageInput;
