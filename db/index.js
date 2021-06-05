// import * as firebase from 'firebase';
import firebase from "firebase";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyBXOTtW8CQUvL0SiGCb15_ySOZJezrmaM8',
    authDomain: 'udn-admissions.firebaseapp.com',
    databaseURL: 'https://udn-admissions-default-rtdb.firebaseio.com/',
    projectId: 'udn-admissions',
    storageBucket: 'udn-admissions.appspot.com',
    // messagingSenderId: 'sender-id',
    // appId: 'app-id',
    // measurementId: 'G-measurement-id',
  };
  
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = (successCallback, failedCallback) => auth.signInWithPopup(provider).then(successCallback).catch(failedCallback);

export const signInWithFacebook = (successCallback, failedCallback) => auth.signInWithPopup(facebookProvider).then(successCallback).catch(failedCallback);

export const signOut = (successCallback, failedCallback) => firebase.auth().signOut().then(successCallback).catch(failedCallback);

export default firebase;

