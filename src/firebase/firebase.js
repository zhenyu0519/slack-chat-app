import firebase from "firebase";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyD-Ciari-gwOptg3jdcdY5KiYYicJWkedM",
  authDomain: "slack-chat-app-661c5.firebaseapp.com",
  databaseURL: "https://slack-chat-app-661c5.firebaseio.com",
  projectId: "slack-chat-app-661c5",
  storageBucket: "slack-chat-app-661c5.appspot.com",
  messagingSenderId: "235126045371",
  appId: "1:235126045371:web:5722749387e0d95b79079e",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()

export default firebase;
