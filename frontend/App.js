import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AppText from "./app/components/AppText";

export default function App() {
  const [user, setUser] = useState();
  const [isLoading, setLoading] = useState(false);

  const restoreUser = async () => {
    setLoading(true);
    const user = await authStorage.getUser();
    if (user) setUser(user)
    setLoading(false);
  }

  useEffect(() => {
    restoreUser();
  }, []);
  
  if (isLoading) return <AppText>Yo</AppText>;

  return (
    <SafeAreaView style={styles.container}>
      <AuthContext.Provider value={{ user, setUser }}>
        <OfflineNotice />
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
  },
});
