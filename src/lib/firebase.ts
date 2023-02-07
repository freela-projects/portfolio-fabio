import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAKve4j948dsNGmhvg2av3MgzTfbN9wxwc",
    authDomain: "portfolio-fabio-1d96c.firebaseapp.com",
    projectId: "portfolio-fabio-1d96c",
    storageBucket: "portfolio-fabio-1d96c.appspot.com",
    messagingSenderId: "623706103187",
    appId: "1:623706103187:web:c6db1d097c5c8456969c66"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Instantiate storage
const storage = getStorage(app);

export default storage
