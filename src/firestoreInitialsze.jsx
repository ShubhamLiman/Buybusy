
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";






const firebaseConfig = {
  apiKey: "AIzaSyC6JOArs4fL4PTzBCdooJUe94DQu0bmNZU",
  authDomain: "buybusy-16b8e.firebaseapp.com",
  projectId: "buybusy-16b8e",
  storageBucket: "buybusy-16b8e.firebasestorage.app",
  messagingSenderId: "116957599754",
  appId: "1:116957599754:web:b5e28a06e7d51c8c8027f3"
};

const app = initializeApp(firebaseConfig);
const  db = getFirestore(app);

export default db;