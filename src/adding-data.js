import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore";
import {setDoc, doc} from "firebase/firestore";

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

// reference the collection
const citiesRef = collection(db, "cities");

//Add data: Name, state, country, capital, population, regions
await setDoc(doc(citiesRef, "CPH"), {
    name:"Copenhagen",
    state:"Hovedstaden",
    country:"Sweden",
    capital:true,
    population: 627000,
    regions:["Nørrebro","Vesterbro","Nordvest"] });
await setDoc(doc(citiesRef, "SF"), {
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
await setDoc(doc(citiesRef, "LA"), {
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
await setDoc(doc(citiesRef, "DC"), {
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
await setDoc(doc(citiesRef, "NY"), {
    name: "New York", state: "NY", country: "USA",
    capital: false, population: 8668000,
    regions: ["east_coast"] });
await setDoc(doc(citiesRef, "TOK"), {
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
await setDoc(doc(citiesRef, "BJ"), {
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });
await setDoc(doc(citiesRef, "CHI"), {
    name: "Chicago", state: "IL", country: "USA",
    capital: false, population: 2700000,
    regions: ["midwest", "great_lakes"]
});
await setDoc(doc(citiesRef, "LDN"), {
    name: "London", state: null, country: "United Kingdom",
    capital: true, population: 8900000,
    regions: ["england"]
});
await setDoc(doc(citiesRef, "PAR"), {
    name: "Paris", state: null, country: "France",
    capital: true, population: 2200000,
    regions: ["ile_de_france"]
});
await setDoc(doc(citiesRef, "BER"), {
    name: "Berlin", state: null, country: "Germany",
    capital: true, population: 3600000,
    regions: ["berlin_brandenburg"]
});
await setDoc(doc(citiesRef, "SYD"), {
    name: "Sydney", state: "NSW", country: "Australia",
    capital: false, population: 5000000,
    regions: ["new_south_wales"]
});
await setDoc(doc(citiesRef, "MEX"), {
    name: "Mexico City", state: null, country: "Mexico",
    capital: true, population: 9200000,
    regions: ["central_mexico"]
});
await setDoc(doc(citiesRef, "RIO"), {
    name: "Rio de Janeiro", state: null, country: "Brazil",
    capital: false, population: 6800000,
    regions: ["southeast"]
});
await setDoc(doc(citiesRef, "TOR"), {
    name: "Toronto", state: "ON", country: "Canada",
    capital: false, population: 2900000,
    regions: ["ontario"]
});
await setDoc(doc(citiesRef, "MUM"), {
    name: "Mumbai", state: "MH", country: "India",
    capital: false, population: 12400000,
    regions: ["maharashtra"]
});
await setDoc(doc(citiesRef, "SEO"), {
    name: "Seoul", state: null, country: "South Korea",
    capital: true, population: 9800000,
    regions: ["seoul_metropolitan"]
});
await setDoc(doc(citiesRef, "JKT"), {
    name: "Jakarta", state: null, country: "Indonesia",
    capital: true, population: 10900000,
    regions: ["java"]
});
await setDoc(doc(citiesRef, "DEL"), {
    name: "New Delhi", state: null, country: "India",
    capital: true, population: 2800000,
    regions: ["nct_delhi"]
});
await setDoc(doc(citiesRef, "MAD"), {
    name: "Madrid", state: null, country: "Spain",
    capital: true, population: 3200000,
    regions: ["community_of_madrid"]
});
await setDoc(doc(citiesRef, "AMS"), {
    name: "Amsterdam", state: null, country: "Netherlands",
    capital: true, population: 850000,
    regions: ["north_holland"]
});
await setDoc(doc(citiesRef, "ROM"), {
    name: "Rome", state: null, country: "Italy",
    capital: true, population: 2870000,
    regions: ["latium"]
});
await setDoc(doc(citiesRef, "LIS"), {
    name: "Lisbon", state: null, country: "Portugal",
    capital: true, population: 505000,
    regions: ["lisbon_district"]
});
await setDoc(doc(citiesRef, "ATH"), {
    name: "Athens", state: null, country: "Greece",
    capital: true, population: 664000,
    regions: ["attica"]
});
await setDoc(doc(citiesRef, "CAI"), {
    name: "Cairo", state: null, country: "Egypt",
    capital: true, population: 9120000,
    regions: ["cairo_governorate"]
});
await setDoc(doc(citiesRef, "DUB"), {
    name: "Dublin", state: null, country: "Ireland",
    capital: true, population: 554000,
    regions: ["leinster"]
});