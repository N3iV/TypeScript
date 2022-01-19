import { ILogin } from "./../../types/index.d";
import { auth, providerFacebook, providerGoogle } from "../../Firebase";
import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import { IRegister } from "types/index.d";

export const registerApi = async (user: IRegister) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    console.log(res);
    await updateProfile(res.user, {
      displayName: user.name,
    });
    return res.user;
  } catch (err: any) {
    return toast.error(err.message);
  }
};

export const loginApi = async (user: ILogin) => {
  try {
    console.log({ user });
    const { email, password, remember } = user;
    await setPersistence(
      auth,
      remember ? browserLocalPersistence : browserSessionPersistence
    );
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (err: any) {
    return toast.error(err.message);
  }
};
export const googleApi = async () => {
  try {
    const res = await signInWithPopup(auth, providerGoogle);
    return res.user;
  } catch (err: any) {
    return toast.error(err.message);
  }
};
export const facebookApi = async () => {
  try {
    const res = await signInWithPopup(auth, providerFacebook);
    return res.user;
  } catch (err: any) {
    return toast.error(err.message);
  }
};
export const forgotPassApi = async (email: string) => {
  try {
    const res = await sendPasswordResetEmail(auth, email);
    return toast.success("Success! Check your email");
  } catch (err: any) {
    return toast.error(err.message);
  }
};
export const signOutApi = async () => {
  try {
    await signOut(auth);
  } catch (err: any) {
    return toast.error(err.message);
  }
};
