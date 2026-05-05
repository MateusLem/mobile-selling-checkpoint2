import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';


const firebase_config = {
  apiKey: "AIzaSyCt0UHmndOT3WpUhU6E7koBXJ-X1EpOmmk",
  authDomain: "projeto01-cb4c8.firebaseapp.com",
  databaseURL: "https://projeto01-cb4c8-default-rtdb.firebaseio.com/",
  projectId: "projeto01-cb4c8",
  storageBucket: "projeto01-cb4c8.firebasestorage.app",
  messagingSenderId: "412888814779",
  appId: "1:412888814779:web:2e4b42aab20fc6fa93459e"
};

const app = initializeApp(firebase_config);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
