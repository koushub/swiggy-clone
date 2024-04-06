import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAotE3aM0wngrGoI37qAulvEen6--TO2-4",
  authDomain: "swiggy-clone-f87cc.firebaseapp.com",
  projectId: "swiggy-clone-f87cc",
  storageBucket: "swiggy-clone-f87cc.appspot.com",
  messagingSenderId: "573788075726",
  appId: "1:573788075726:web:fb1d769e7e7fd81126829f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);