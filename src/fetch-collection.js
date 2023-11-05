import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {collection, getDocs, where, query} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATrCghAMP31LFumsYhr-I3920KgtoJI8E",
    authDomain: "fir-web-84050.firebaseapp.com",
    projectId: "fir-web-84050",
    storageBucket: "fir-web-84050.appspot.com",
    messagingSenderId: "439128737122",
    appId: "1:439128737122:web:d5b490c386808a89a7183b"
};


/*// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get firestore from firebase
const db = getFirestore(app);

// Reference city collection of documents
const cities = collection(db, "cities");

// Define the query to fetch cities that are not capitals
const q = query(cities, where("capital", "!=", true));

// Fetch all documents based on the query
const snapshot = await getDocs(q);

snapshot.forEach((doc) => {
    const cityData = doc.data();
    console.log(cityData.name); // Assuming 'name' is the field that holds the city's name
});*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get firestore from firebase
const db = getFirestore(app);

// Reference city collection of documents
const cities = collection(db, "cities");

// Define the query to fetch cities that are in the USA or China
const q = query(cities, where("country", "in", ["USA", "China"]));

// Fetch all documents based on the query
const snapshot = await getDocs(q);

snapshot.forEach((city) => {
    console.log(city.data()); // Now correctly calling the data() function
});
