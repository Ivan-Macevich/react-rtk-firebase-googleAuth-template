import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  projectId: "login-",
  storageBucket: "login-.appspot.com",
  messagingSenderId: "",
  appId: "1::web:c412cec1f34ae0025d900a",
  measurementId: "G-",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
