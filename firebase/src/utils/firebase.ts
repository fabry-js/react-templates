import firebase from "firebase";
import "firebase/app"
import "firebase/firestore";

const firebaseConfig = {

};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()