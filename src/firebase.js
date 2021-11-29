import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "@firebase/storage";
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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)