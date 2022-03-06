import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyCPJJxvC-OU1W97W_mP43n1xo9ZANPeMjc",
  authDomain: "labdata-84d37.firebaseapp.com",
  projectId: "labdata-84d37",
  storageBucket: "labdata-84d37.appspot.com",
  messagingSenderId: "778212944505",
  appId: "1:778212944505:web:b5cafe647df652feb1c2a8",
  measurementId: "G-87MS7D2LD3",
});
const db = getFirestore(firebaseApp);
export default db;
