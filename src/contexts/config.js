import "firebase/auth";
import "firebase/firestore";

import firebase from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdApT9441nREwTZdWbrOV2EMeGvGSdtlw",
    authDomain: "technoscape-4f435.firebaseapp.com",
    databaseURL: "https://technoscape-4f435.firebaseio.com",
    projectId: "technoscape-4f435",
    storageBucket: "technoscape-4f435.appspot.com",
    messagingSenderId: "723093814692",
    appId: "1:723093814692:web:a85d653f37fb3cc9c91531",
    measurementId: "G-7K32J3S9M8"
};

class Firebase {
    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }
}

export default Firebase;