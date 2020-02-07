import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyB9fzIGs8Pz5ETQDAnKCwvKgM9aj3_wdo8",
  authDomain: "expertizoquiz-a6899.firebaseapp.com",
  databaseURL: "https://expertizoquiz-a6899.firebaseio.com",
  projectId: "expertizoquiz-a6899",
  storageBucket: "expertizoquiz-a6899.appspot.com",
  messagingSenderId: "871496697133",
  appId: "1:871496697133:web:006db968383c8c05b6ffa4",
  measurementId: "G-ECEN0072MT"
};

firebase.initializeApp(firebaseConfig);

export default firebase;