export type loginData = {
  password: string,
  email: string
};

export type UserState = {
  user: boolean;
  setUser: (open: boolean) => void;
  prevState: null;
};

export type credentialState = {
  credentials: loginData;
  setCredentials: (value: loginData) => void;
  
};
