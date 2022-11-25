import { createContext, useState, useEffect, ReactNode } from "react";
import { userState, loginData, credentialState, errorState } from "../types/loginTypes";

const initialState: credentialState = {
  credentials: {
    password: "",
    email: "",
  },
  setCredentials: function (value: loginData): void {
    throw new Error("Function not implemented.");
  },
};

export const DataContext = createContext({});

interface props {
  children: ReactNode | ReactNode[];
}

export const DataContextProvider = ({ children }: props) => {
  const [credentials, setCredentials] = useState<credentialState>(initialState);

  const [user, setUser] = useState<userState | null>(null);
  const [error, setError] = useState<errorState | null>(null);

  return (
    <DataContext.Provider
      value={{ user, setUser, credentials, setCredentials, error, setError }}
    >
      {children}
    </DataContext.Provider>
  );
};
