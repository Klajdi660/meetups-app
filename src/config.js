import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const config = {
    apiKey: "AIzaSyCFR-WuFEyMccAUzZ94DESUt1kkaLrZa1g",
    authDomain: "meetups-app-9b46d.firebaseapp.com",
    databaseURL: "https://meetups-app-9b46d-default-rtdb.firebaseio.com",
    projectId: "meetups-app-9b46d",
    storageBucket: "meetups-app-9b46d.appspot.com",
    messagingSenderId: "204280321745",
    appId: "1:204280321745:web:4261608dc8120745e4d7f0"
};

const firebasE = firebase.initializeApp(config);

export default firebasE;
