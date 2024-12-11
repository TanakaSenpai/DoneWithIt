import apiClient from "./client"

const register = (data) => apiClient.post("/expoPushToken", {data})

export default {register}
