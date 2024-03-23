import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCph32qmu5LfcCn8_1exfjqNoZhHUVqPdY",
  authDomain: "unieve-a0976.firebaseapp.com",
  databaseURL: "https://unieve-a0976-default-rtdb.firebaseio.com",
  projectId: "unieve-a0976",
  storageBucket: "unieve-a0976.appspot.com",
  messagingSenderId: "618800386916",
  appId: "1:618800386916:web:fafa7af134ca1543e92071"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);