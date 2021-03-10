import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCkDG9Dm7lAqyIyPB_FPkFGdMHPrsIgj30",
  authDomain: "nutri-5162d.firebaseapp.com",
  projectId: "nutri-5162d",
  storageBucket: "nutri-5162d.appspot.com",
  messagingSenderId: "571066615904",
  appId: "1:571066615904:web:50033323bb79acc99ddb05"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;