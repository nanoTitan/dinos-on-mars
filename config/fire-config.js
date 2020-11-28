// config/fire-config.js

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/analytics';

// TODO: Don't hard code config values like this in a production app. We should definitely use environment variables instead

const firebaseConfig = {
    apiKey: "AIzaSyChTeMWR3mp358jMZtNYU-Sx21OCk3bJG4",
    authDomain: "dinos-on-mars.firebaseapp.com",
    databaseURL: "https://dinos-on-mars.firebaseio.com",
    projectId: "dinos-on-mars",
    storageBucket: "dinos-on-mars.appspot.com",
    messagingSenderId: "564259932961",
    appId: "1:564259932961:web:5c0c83f3827f1e00dacc60",
    measurementId: "G-Y71TZVH2L2"
  };

try {
    if (typeof window !== 'undefined' && !firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        firebase.analytics.isSupported().then((isSupported) => {
            if (isSupported) {
                firebase.analytics();
            }
        })
    }
} catch(err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)}
}

const fire = firebase;
export default fire;