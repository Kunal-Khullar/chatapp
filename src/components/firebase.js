import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBkbwzJihz0NcGcLEY6C9-mHZ33wWBXxgk",
    authDomain: "duo-louge.firebaseapp.com",
    projectId: "duo-louge",
    storageBucket: "duo-louge.appspot.com",
    messagingSenderId: "624372786121",
    appId: "1:624372786121:web:17498d32feb4f56034be18",
    measurementId: "G-WDHHDF3JKK"
  };
  // Initialize Firebase
 const fireapp =  firebase.initializeApp(firebaseConfig);
  const firelytics = firebase.analytics();
  const db = firebase.firestore();
  const storageRef = firebase.storage().ref();
  const auth = firebase.auth() ;
  export {fireapp,firelytics,db,auth,storageRef}