import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export let firestore = null;
export let auth = null;
export let userInfo = null;

export function createFirebaseConnection() {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
  });
  firestore = firebase.firestore();
  auth = firebase.auth();
}

export function addUsers(userInfo) {
  firestore.collection('users').add(userInfo);
}
