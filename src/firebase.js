import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUV30qHFu8bVnxdwJ8L7cdOQ2WC4_xtC8",
  authDomain: "devine-treasures-by-tere-6207c.firebaseapp.com",
  databaseURL: "https://devine-treasures-by-tere-6207c-default-rtdb.firebaseio.com",
  projectId: "devine-treasures-by-tere-6207c",
  storageBucket: "devine-treasures-by-tere-6207c.appspot.com",
  messagingSenderId: "1049735190376",
  appId: "1:1049735190376:web:1352cfec9700ba4b0be8dd",
  measurementId: "G-9TGGE7R6B2"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
