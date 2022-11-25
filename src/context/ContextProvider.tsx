import { createContext, useState, useEffect, ReactNode } from "react";
import { UserState, loginData, credentialState } from "../types/loginTypes";

const initialState: credentialState ={
  credentials: {
    password: "",
    email: ""
  },
  setCredentials: function (value: loginData): void {
    throw new Error("Function not implemented.");
  }
}

export const DataContext = createContext({});

interface props {
  children: ReactNode | ReactNode[];
}

export const DataContextProvider = ({ children }: props) => {
  
  const [credentials, setCredentials] = useState<credentialState>(initialState);

  const [user, setUser] = useState<UserState | null>(null);

  return (
    <DataContext.Provider value={{ user, setUser, credentials, setCredentials }}>
      {children}
    </DataContext.Provider>
  );
};
