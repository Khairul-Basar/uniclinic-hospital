import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default firebaseAuthentication