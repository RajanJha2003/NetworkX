import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { authDataContext } from "./AuthContext";
import axios from "axios";

export const userDataContext = createContext();

const UserContext = ({ children }) => {
  let [userData, setUserData] = useState(null);
  const { serverUrl } = useContext(authDataContext);
  const getCurrentUser = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/user/currentUser", {
        withCredentials: true,
      });
      setUserData(result.data.user);

      console.log(result);
    } catch (error) {
      console.log(error);
      setUserData(null);
    }
  };

  useEffect(()=>{
    getCurrentUser();
  },[])

  const values = {
    userData,
    setUserData,
  };
  return (
    <userDataContext.Provider value={values}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContext;
