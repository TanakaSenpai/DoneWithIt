import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

import expoPushTokenApi from "../api/expoPushToken";
import { navigate } from "../navigation/rootNavigation";
import useAuth from "../hooks/useAuth";

export default function useNotifications() {
  const {user} = useAuth()

  useEffect(() => {
    regForPushNotifications();
    // Listen for incoming notifications
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("Notification received:", notification);
      }
    );

    // Listen for interactions with notifications
    const responseSubscription =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("Notification response:", response);
        navigate("Account");
      });

    // Cleanup listeners
    return () => {
      subscription.remove();
      responseSubscription.remove();
    };
  }, []);

  const regForPushNotifications = async () => {
    try {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== "granted") return;

      const projectId =
        Constants?.expoConfig?.extra?.eas?.projectId ??
        Constants?.easConfig?.projectId;
      const token = await Notifications.getExpoPushTokenAsync({ projectId });
      expoPushTokenApi.register({ token: token.data, userId: user.user._id });
    } catch (error) {
      console.log(error);
    }
  };
}
