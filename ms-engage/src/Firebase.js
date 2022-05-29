import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABTBEJ-jQH0If3-fTAsprZfSAXEafuaRE",
  authDomain: "datalytics-424bc.firebaseapp.com",
  projectId: "datalytics-424bc",
  storageBucket: "datalytics-424bc.appspot.com",
  messagingSenderId: "289655472662",
  appId: "1:289655472662:web:51e8356122d70e7e912b37"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
    }).catch((error) => {
        console.log(error)
    })
}

