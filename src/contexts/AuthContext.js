import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password, displayName) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  // solution for displayName not working
  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  // .then(function(result) {
  //   return result.user.updateProfile({
  //     displayName: document.getElementById("name").value
  //   })
  // }).catch(function(error) {
  //   console.log(error);
  // });

  // I believe this user.updateProfile() isn't a function there.
  // It should be const user = firebase.auth().currentUser;
  // and then you can call .updateProfile() on the user.

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    //   unsubcscribe unsubscribes the listener once we unmount
    // potential extra parenthesis around user in line below due to prettier

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  //   empty array only runs it once

  const value = {
    currentUser,
    // displayName,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
