import React, { useState } from "react";
import Auth0, { useAuth0 } from "react-native-auth0";
import jwtDecode from "jwt-decode";

type AuthContextData = {
  loading: boolean;
  loggedIn: boolean;
  login(): void;
  logout(): void;
  userData: any;
}

const AuthContext = React.createContext<AuthContextData>({
  loading: false,
  loggedIn: false,
  login: () => { },
  logout: () => { },
  userData: null
});

const AuthContextProvider = (props) => {
  const { authorize, clearSession, user } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  const auth0 = new Auth0({
    domain: "dev-0wcsbch236ixaz5o.us.auth0.com",
    clientId: "nuGrj7DlA7Phtw2l0gdPs26z2V6enQXf",
  });

  const login = async () => {
    try {
      const user_auth = await auth0.webAuth.authorize({
        scope: 'openid email profile',
      });
      setLoggedIn(true);
      const user_details = user_auth.idToken && jwtDecode(user_auth.idToken);
      console.log('user_details', user_details)
      setUserData(user_details);
    } catch (err) {
      console.error(err + 'Error logging in');
    }
  };

  const logout = async () => {
    try {
      await auth0.webAuth.clearSession({});
      setLoggedIn(false);
      setUserData(null);
    } catch (err) {
      console.error('Error logging out');
    }
  };

  const variables = {
    loading,
    loggedIn,
    login,
    logout,
    userData,
  };

  return (
    <AuthContext.Provider value={variables}>{props.children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };