import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDoc, doc} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjZPmTcZC8ssOg4nhdDXkrr3Ct2Uacp5w",
    authDomain: "firstbase-46fae.firebaseapp.com",
    databaseURL: "https://firstbase-46fae-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "firstbase-46fae",
    storageBucket: "firstbase-46fae.appspot.com",
    messagingSenderId: "2129737229",
    appId: "1:2129737229:web:3d664cbd068e172f828744",
    measurementId: "G-RZNK8E22CD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get firestore from firebase
const db = getFirestore(app);

//Get collection reference
const cityCollection = collection(db, "cities");

//Reference a document by doc: database, collection, id
const documentReference = doc(db, "cities","SF");

//Fetch document with getDoc
