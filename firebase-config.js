// Firebase project config — see firebase-backend/FIREBASE_SETUP.md, Step 5.
// These values are NOT secret; Firebase is designed to have them visible
// in client code. Real protection comes from firestore.rules.
const firebaseConfig = {
    apiKey: "AIzaSyAS9WSJ34GhA10WG_RGKstllGKceqY6ZtQ",
    authDomain: "https://thestarth-aaef5.firebaseapp.com",
    projectId: "thestarth-aaef5",
    storageBucket: "https://thestarth-aaef5.firebasestorage.app",
    messagingSenderId: "349671570168",
    appId: "1:349671570168:web:62e30193c7402faa12d90d"
};

let auth = null;
let db = null;
const FIREBASE_READY = !!firebaseConfig.apiKey;

if (FIREBASE_READY) {
    firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    db = firebase.firestore();
} else {
    console.warn('Firebase not configured yet — see firebase-backend/FIREBASE_SETUP.md. Accounts and admin panel will not work until it is.');
}
