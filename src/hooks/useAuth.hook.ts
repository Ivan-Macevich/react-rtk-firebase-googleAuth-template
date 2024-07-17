import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch.hook";
import { auth } from "../firebase/firebaseConfig";
import { useAppSelector } from "./useAppSelector.hook";
import { selectUser } from "../modules/auth/auth.selectors";

export function useAuth() {
    const dispatch = useAppDispatch();

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (user) => {
        dispatch({ type: "auth/setUser", payload: user });
      });
      return unSubscribe;
    }, [dispatch]);

  return useAppSelector(selectUser);
}