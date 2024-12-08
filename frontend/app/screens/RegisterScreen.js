import React, { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import authApi from "../api/auth";
import {ErrorMessage} from "../components/forms";
import useAuth from "../hooks/useAuth";
import useApi from "../hooks/useApi";
import Loading from "../components/Loading";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(2).label("Name"),
  email: Yup.string().email().required("Email is required").label("Email"),
  password: Yup.string()
    .min(3, "Password must be at least 3 characters long")
    .required("Password is required")
    .label("Password"),
});

const RegisterScreen = () => {
  const {login} = useAuth();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const registerApi = useApi(authApi.register)
  const loginApi = useApi(authApi.login)

  const handleSubmit = async (userInfo) => {
    const response = await registerApi.request(userInfo);
    setErrorMessage("")
    if (!response.ok) {
      setError(true);
      setErrorMessage(response.data?.message);
      return;
    }
    const {data} = await loginApi.request(userInfo.email, userInfo.password);
    login(data);
  }

  return (
    <>
    <Loading visible={registerApi.loading || loginApi.loading} />
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <ErrorMessage error={errorMessage} visible={error} />
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField name="name" placeholder="Name" icon="account" autoCorrect={false} />
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

        <SubmitButton title="Register" />
      </AppForm>
    </View>
    </>
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

export default RegisterScreen;
