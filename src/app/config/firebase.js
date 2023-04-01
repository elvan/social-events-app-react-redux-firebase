import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
