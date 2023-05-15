import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const config = {
    apiKey: "AIzaSyBQ3DLBk_-n0c0cC0r88ALBg1EX1fw5A0M",
    authDomain: "meetups-1065f.firebaseapp.com",
    databaseURL: "https://meetups-1065f-default-rtdb.firebaseio.com",
    projectId: "meetups-1065f",
    storageBucket: "meetups-1065f.appspot.com",
    messagingSenderId: "328396110395",
    appId: "1:328396110395:web:63a5800dd3f9303bc83a1e"
};

const firebasE = firebase.initializeApp(config);

export default firebasE;
