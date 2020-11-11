import React from "react";
//import { useQuery, useMutation } from "react-query";

import UserApi from "../api/Users";


export const AuthenticationContext = React.createContext(null);

export function AuthenticationProvider({ children }) {
  //const { statusDispatch } = React.useContext(StatusContext);

  // TODO need check this for end the token is not valid
  const initialState = JSON.parse(localStorage.getItem("log")) || INITIAL_USERS;
  const [user, setUser] = React.useState(initialState);

  async function authenticationUser(userInput) {
    const response = await UserApi.login({ ...userInput });

    // TODO validation of response
    console.log("test", response);

    if (response.status !== 202) {
      return "Error";
    }

    const userState = {
      ...user,
      user: response.data.user.username,
      token: response.data.token,
      isLogged: true,
      isTokenSecure: true,
    };

    setUser(userState);
    // need check this
    localStorage.setItem("log", JSON.stringify(userState));

    return "Success";
  }

  function createUser(user) {
    //userDispatch({ type: UserActionsTypes.CREATE_ACCOUNT }, user);
  }

  function isAuthenticated() {
    if (user.isLogged) return true;
    return false;
  }

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        authenticationUser,
        createUser,
        isAuthenticated,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}