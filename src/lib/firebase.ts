import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {

  apiKey: "AIzaSyBxbijp75qoEHkYHxVxyzQFQnvL8gMqsAk",

  authDomain: "sambukila-501e8.firebaseapp.com",

  projectId: "sambukila-501e8",

  storageBucket: "sambukila-501e8.firebasestorage.app",

  messagingSenderId: "693477549426",

  appId: "1:693477549426:web:3bb637b696a666ca9329eb",

  measurementId: "G-XC0TYTVV31"

};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;