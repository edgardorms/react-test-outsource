import { loginData, dataUser } from "../types/loginTypes";

export function login({ email, password }: loginData) {
  return new Promise<dataUser>((resolve) => {
    setTimeout(() => {
      if (email === "elon@mercdev.com" && password === "twitter") {
        resolve({ data: { avatar: "/avatar.jpeg", name: "Elon" } });
      } else {
        resolve({ error: "Incorrect email or password" });
      }
    }, 1000);
  });
}
