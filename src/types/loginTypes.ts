export type loginData = {
  password: string;
  email: string;
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
