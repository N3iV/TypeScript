import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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
