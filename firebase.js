import firebase from "firebase"
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyCncl9AL_2raO5iXkh7vRURqaZ4L7gJJHU",
    authDomain: "facebook-clone-d7199.firebaseapp.com",
    projectId: "facebook-clone-d7199",
    storageBucket: "facebook-clone-d7199.appspot.com",
    messagingSenderId: "889868428957",
    appId: "1:889868428957:web:73c5ac9fb3390c199f5674"
  };
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = app.firestore();
  const storage = firebase.storage();
  export {db,storage};