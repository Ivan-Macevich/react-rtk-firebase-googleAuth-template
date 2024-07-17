import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdIekbgySgjiUvEOekyZEjPDDLfFxAwRg",
  authDomain: "login-7652b.firebaseapp.com",
  projectId: "login-7652b",
  storageBucket: "login-7652b.appspot.com",
  messagingSenderId: "815078260415",
  appId: "1:815078260415:web:c412cec1f34ae0025d900a",
  measurementId: "G-VMNCJ5MLXM",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
