import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import CategoryPickerItem from "../components/CategoryPickerItem";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).label("Price"),
  description: Yup.string()
    .required()
    .min(10)
    .label("Description")
    .nullable(false),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array()
    .min(1, "Please select at least one image")
    .label("Images"),
});
const categories = [
  { label: "Furniture", value: 1, backgroundColor: "#fc5c65", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "#fc5c39", icon: "lock" },
  { label: "Technology", value: 3, backgroundColor: "blue", icon: "lock" },
  { label: "Music", value: 3, backgroundColor: "skyblue", icon: "music" },
];

function ListingEditScreen() {
  const location = useLocation();
  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: 0,
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField name="title" placeholder="Title" maxLength={255} />
        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
          width={150}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
          width="50%"
        />
        <AppFormField
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default ListingEditScreen;