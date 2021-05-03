import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDNrdJr0OzTLSWWBcUg4tSxb4OM8VN0KAE",
    authDomain: "engnrs-1b078.firebaseapp.com",
    databaseURL: "https://engnrs-1b078-default-rtdb.firebaseio.com",
    projectId: "engnrs-1b078",
    storageBucket: "engnrs-1b078.appspot.com",
    messagingSenderId: "683321858245",
    appId: "1:683321858245:web:d56f6f252242a937d278ac",
  });
} else {
  firebase.app();
}

export default firebase;
