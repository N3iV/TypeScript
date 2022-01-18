import { IRegister } from "./../types/index.d";
export const validRegister = (user: IRegister) => {
  const { name, email, password, confirmPassword } = user;
  const errors: string[] = [];
  if (!name.trim()) {
    errors.push("Please add your name!");
  } else if (name.length > 20) {
    errors.push("Display name just under 20 characters");
  }
  if (!email.trim()) {
    errors.push("Please add your email!");
  } else if (!validateEmail(email)) {
    errors.push("Email format is incorrect");
  }
  const msg = checkPassword(password, confirmPassword);
  if (msg) errors.push(msg);
  return {
    errMsg: errors,
    errLength: errors.length,
  };
};

const validateEmail = (email: string) => {
  const rg =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return rg.test(email);
};

export const checkPassword = (password: string, confirmPassword: string) => {
  if (password.length < 6) {
    return "Password must be at least 6 chars";
  } else if (password !== confirmPassword) {
    return "Confirm password did not match ";
  }
};
