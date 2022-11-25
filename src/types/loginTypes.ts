export type loginData = {
  password: string,
  email: string
};

export type UserState = {
  user: boolean;
  setUser: boolean;
  prevState: null;
};

export type credentialState = {
  credentials: loginData;
  setCredentials: (value: loginData) => void;
  
};
