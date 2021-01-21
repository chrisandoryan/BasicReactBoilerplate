import "firebase/auth";
import "firebase/firestore";

import firebase from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // Paste Firebase Config here.
};

class Firebase {
    constructor() {
        if (!firebase.apps.length) {
            try {
                firebase.initializeApp(firebaseConfig);
            } catch (error) {
                console.error("Firebase initialization failed.")
            }
        }
        try {
            this.auth = firebase.auth();
            this.db = firebase.firestore();   
        } catch (error) {
            
        }
    }
}

export default Firebase;