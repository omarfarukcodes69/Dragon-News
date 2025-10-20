import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  // console.log(user);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logInWithGitHub = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const updatedUserSet = (updateUser) => {
    return updateProfile(auth.currentUser, updateUser);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [auth]);

  const AuthData = {
    user,
    setUser,
    createUser,
    logout,
    logIn,
    loading,
    setLoading,
    updatedUserSet,
    logInWithGoogle,
    logInWithGitHub,
  };
  return <AuthContext value={AuthData}>{children}</AuthContext>;
};
export default AuthProvider;
