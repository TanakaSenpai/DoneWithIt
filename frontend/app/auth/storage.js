import * as SecureStore from "expo-secure-store"
import { jwtDecode } from "jwt-decode";

const key = "authUser"

const storeUser = async user => {
    try {
        await SecureStore.setItemAsync(key, user)
    } catch (error) {
        console.log("Error storing user:", error);
    }
}

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.log("Error getting user:", error);
    }
}

const getUser = async () => {
    const token = await getToken();

    return token ? jwtDecode(token) : null;
}

const removeUser = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log("Error removing user:", error);
    }
}

export default { storeUser, getUser, removeUser };