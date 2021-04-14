import { createContext } from "react";

// createContext takes default state
const initialState = {
  isLoggedIn: false,
};

const AuthContext = createContext(initialState);

export default AuthContext;
