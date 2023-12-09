import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// import {} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCbczoHREn7H5lHl4CivrBUjebCg-e3s-M",
  authDomain: "signal-project-b36ee.firebaseapp.com",
  projectId: "signal-project-b36ee",
  storageBucket: "signal-project-b36ee.appspot.com",
  messagingSenderId: "237098060382",
  appId: "1:237098060382:web:d9614001addf6149dd82cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
};
