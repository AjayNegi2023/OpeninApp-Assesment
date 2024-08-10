import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPN2b-GovD960Twns_H9vz2g_c2bv3vdI",
  authDomain: "openinapp-5bc9c.firebaseapp.com",
  projectId: "openinapp-5bc9c",
  storageBucket: "openinapp-5bc9c.appspot.com",
  messagingSenderId: "355885906721",
  appId: "1:355885906721:web:07911161a1520a268d5c60",
  measurementId: "G-PPLJFDFGES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
export { auth, provider };