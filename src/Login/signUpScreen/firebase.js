import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAAAEn8z-GnRUawGxuesCT7qzu0ns2HQH0",
    authDomain: "hksirya-netflix-clone.firebaseapp.com",
    projectId: "hksirya-netflix-clone",
    storageBucket: "hksirya-netflix-clone.appspot.com",
    messagingSenderId: "459335504412",
    appId: "1:459335504412:web:abf9d543833c7f96d005d9"
  };

  firebase.initializeApp(firebaseConfig);

  const auth =firebase.auth();

  export {auth} 