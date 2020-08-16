import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWEu0uJwLql0GzI1W5RyjANkAffiyQjOc",
  authDomain: "tiktok-clone-19338.firebaseapp.com",
  databaseURL: "https://tiktok-clone-19338.firebaseio.com",
  projectId: "tiktok-clone-19338",
  storageBucket: "tiktok-clone-19338.appspot.com",
  messagingSenderId: "398136017488",
  appId: "1:398136017488:web:ae2b55fde21cc49b4e4755",
  measurementId: "G-D4W7Q86DWC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
