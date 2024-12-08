import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../imageInput/ImageInputList";

const FormImagePicker = ({ name }) => {
  const { errors, touched, values, setFieldValue } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (imageUri) => {
    setFieldValue(name, [...imageUris, imageUri]);
  };
  const handleRemove = (imageUri) => {
    setFieldValue(name, imageUris.filter((uri) => uri !== imageUri));
  };

  return (
    <View style={styles.container}>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default FormImagePicker;
