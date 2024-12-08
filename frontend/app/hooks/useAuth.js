import { useContext } from "react";

import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import { jwtDecode } from "jwt-decode";

const useAuth = () => {
    const {user, setUser} = useContext(AuthContext);

    const login = (authToken) => {
        const user = jwtDecode(authToken)
        setUser(user);
        authStorage.storeUser(authToken);
    }

    const logOut = () => {
        setUser(null);
        authStorage.removeUser();
    }

    return {user, login, logOut};
}

export default useAuth;