import { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "omar faruk",
    email: "omarfaruk21221@gmail.com",
  });
  //   const AuthInfo = {
  //     name: "omar faruk",
  //     email: "omarfaruk21221@gmail.com",
  //   };
  const AuthData = {
    user,
    setUser,
  };
  return <AuthContext value={AuthData}>{children}</AuthContext>;
};
export default AuthProvider;
