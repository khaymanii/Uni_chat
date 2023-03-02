import firebase from "firebase/app";
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCQOpQk_FV-0D5kvmvVBTK0gFMZBdosaDM",
    authDomain: "uni-chat-2272e.firebaseapp.com",
    projectId: "uni-chat-2272e",
    storageBucket: "uni-chat-2272e.appspot.com",
    messagingSenderId: "662218656320",
    appId: "1:662218656320:web:ab07554101a436f0e26da5"
  }).auth();