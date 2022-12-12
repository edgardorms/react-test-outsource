import { createContext, useState, ReactNode } from "react";
import {
  userState,
  loginData,
  credentialState,
  errorState,
  dataUser,
  dataUserState,
  
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

  const [isUser, setIsUser] = useState<userState | null>(null);
  const [isError, setIsError] = useState<errorState | null>(null);
  const [dataLogged, setDataLogged] = useState<dataUserState>(initialDataUser);

  return (
    <DataContext.Provider
      value={{
        isUser,
        setIsUser,
        credentials,
        setCredentials,
        isError,
        setIsError,
        dataLogged,
        setDataLogged,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
