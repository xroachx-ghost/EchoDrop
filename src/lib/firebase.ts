import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4iTyyCToZ8eVtTV3CKKrI9KIdNFPMfUM",
  authDomain: "echodrop-542b1.firebaseapp.com",
  projectId: "echodrop-542b1",
  storageBucket: "echodrop-542b1.firebasestorage.app",
  messagingSenderId: "21867158475",
  appId: "1:21867158475:web:12dec29a9d40b4c4d8744e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
