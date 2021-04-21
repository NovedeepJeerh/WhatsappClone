import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBMneVTiGLbrI8E7Ldj3wOSKk_IQulV1-o",
    authDomain: "whatsapp-2-d6ab3.firebaseapp.com",
    projectId: "whatsapp-2-d6ab3",
    storageBucket: "whatsapp-2-d6ab3.appspot.com",
    messagingSenderId: "338700555928",
    appId: "1:338700555928:web:63d57dad365415af29a2ed",
    measurementId: "G-DY4EPNHRXH"
  };

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };