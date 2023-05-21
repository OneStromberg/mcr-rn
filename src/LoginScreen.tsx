import React, { useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from "./AuthContextProvider";

const LoginScreen = ({ navigation }) => {
  const { loggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (loggedIn) {
      navigation.replace("App");
    }
  }, [loggedIn]);

  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>You are not logged in</Text>
      <TouchableOpacity style={styles.signInButton} onPress={() => login()}>
        <Text style={styles.signInButtonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  signInButton: {
    backgroundColor: '#0077ff',
    padding: 12,
    marginBottom: 10,
    width: '100%',
  },
  signInButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export { LoginScreen };