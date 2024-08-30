// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAAVZvFXbquTFQTZEA9Bw69UUsrr9pAoIo",
    authDomain: "clone-596ff.firebaseapp.com",
    projectId: "clone-596ff",
    storageBucket: "clone-596ff.appspot.com",
    messagingSenderId: "297526519375",
    appId: "1:297526519375:web:e5bacbb9bf54e4e041ac3a",
    measurementId: "G-BRTQH8KX06"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  

  export{auth};