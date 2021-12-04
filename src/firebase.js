import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBJoWG5qHhVeGcYKLuwUARE1c7AbITY-t8",
  authDomain: "nyari-event.firebaseapp.com",
  projectId: "nyari-event",
  storageBucket: "nyari-event.appspot.com",
  messagingSenderId: "744629423291",
  appId: "1:744629423291:web:409546b22604c0d1f26d9e",
  measurementId: "G-ZPC1NFV6G2"
};

// Initialize Firebase feature that you want, i'll using [Storage for store the image] & [Auth for Login Authentication]
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const auth = getAuth(app)
