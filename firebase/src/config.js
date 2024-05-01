import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBk4qnnqNUChJ2QmxWkLu8B-Un2zWHilus",
  authDomain: "react-8-e10ca.firebaseapp.com",
  projectId: "react-8-e10ca",
  storageBucket: "react-8-e10ca.appspot.com",
  messagingSenderId: "954763970916",
  appId: "1:954763970916:web:541d874473c6afc49e9271",
  measurementId: "G-7DW83LBPVF"
};


const app = initializeApp(firebaseConfig);

const firestore=getFirestore(app);
const storage=getStorage(app);

export {app,firestore,storage}
