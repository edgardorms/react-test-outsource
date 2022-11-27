import { createContext, useState, ReactNode } from "react";
import {
  userState,
  loginData,
  credentialState,
  errorState,
  dataUser,
  dataUserState,
  logItems,
} from "../types/loginTypes";



const initialCredential: credentialState = {
  credentials: {
    password: "",
    email: "",
  },
  setCredentials: function (value: loginData): void {
    throw new Error("Function not implemented.");
  },
};

const initialDataUser: dataUserState = {
  dataLogged: {
    data: { avatar: "", name: "" },
    error: "",
  },
  setDataLogged: function (value: dataUser): void {
    throw new Error("Function not implemented.");
  },
};
export const DataContext = createContext({});

interface props {
  children: ReactNode | ReactNode[];
}

export const DataContextProvider = ({ children }: props) => {
  const [credentials, setCredentials] = useState<credentialState | loginData>(
    initialCredential
  );

  const [user, setUser] = useState<userState | null>(null);
  const [error, setError] = useState<errorState | null>(null);
  const [dataLogged, setDataLogged] = useState<dataUserState>(initialDataUser);

  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
        credentials,
        setCredentials,
        error,
        setError,
        dataLogged,
        setDataLogged
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
