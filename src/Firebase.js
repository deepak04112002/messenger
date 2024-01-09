import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCsKpRmjToj1h1lmrLislCJAnAa-1nZPnU",
    authDomain: "messenger-df06c.firebaseapp.com",
    projectId: "messenger-df06c",
    storageBucket: "messenger-df06c.appspot.com",
    messagingSenderId: "838594236171",
    appId: "1:838594236171:web:ee1ad9ed55ae275bea9c0e"
  };

// Check if firebase app is not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { auth };
