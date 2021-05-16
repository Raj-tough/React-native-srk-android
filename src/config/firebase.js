import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: 'AIzaSyAMSmGA0qg_aAidiuP5GYik_PaJlXfBqpU',
  authDomain: 'srk-rn-project.firebaseapp.com',
  projectId: 'srk-rn-project',
  storageBucket: 'srk-rn-project.appspot.com',
  messagingSenderId: '688853284427',
  appId: '1:688853284427:web:5bc8f4d70a0acaebda3fce',
  measurementId: 'G-3YGGQSDHR2',
};
!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

firebase.firestore().settings(settings);

export {firebase};

// import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/database';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAMSmGA0qg_aAidiuP5GYik_PaJlXfBqpU',
//   authDomain: 'srk-rn-project.firebaseapp.com',
//   projectId: 'srk-rn-project',
//   storageBucket: 'srk-rn-project.appspot.com',
//   messagingSenderId: '688853284427',
//   appId: '1:688853284427:web:5bc8f4d70a0acaebda3fce',
//   measurementId: 'G-3YGGQSDHR2',
// };

// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// export const db = firebase.firestore();

// export {firebase};
