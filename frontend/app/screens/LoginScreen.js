import React, { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, ErrorMessage, SubmitButton } from "../components/forms";
import authApi from "../api/auth"
import useAuth from "../hooks/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required").label("Email"),
  password: Yup.string()
    .min(3, "Password must be at least 3 characters long")
    .required("Password is required")
    .label("Password"),
});

function LoginScreen() {
  const {login } = useAuth()
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const handleSubmit = async ({email, password}) => {
   const response = await authApi.login(email, password); 
   if (!response.ok) {
     setErrorMessage(response.data?.message || response.originalError.message);
     return setError(true);
    }
   login(response.data);
  }
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <ErrorMessage error={errorMessage} visible={error} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title="Login" />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    height: 50,
    width: 75,
    marginTop: 50,
    marginBottom: 40,
    alignSelf: "center",
  },
});

export default LoginScreen;
