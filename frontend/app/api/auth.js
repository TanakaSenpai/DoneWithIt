import apiClient from "./client";


const login = (email, password) => apiClient.post("/auth", {email, password});

const register = (userInfo) => apiClient.post("/auth/register", {userInfo});

export default {login, register};