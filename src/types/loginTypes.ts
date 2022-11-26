export type loginData = {
  password: string;
  email: string;
};

export type dataUser = {
  data?: {
    avatar: string;
    name: string;
  };
  error?: string | null;
};

export type logItems = {
  avatar: string;
  name: string;
};

export type dataUserState = {
  dataLogged: dataUser;
  setDataLogged: (value: dataUser) => void;
};
export type userState = {
  user: boolean;
  setUser: (open: boolean) => void;
  prevState: null;
};
export type errorState = {
  error: boolean;
  setError: (open: boolean) => void;
  prevState: null;
};

export type credentialState = {
  credentials: loginData;
  setCredentials: (value: loginData) => void;
};
