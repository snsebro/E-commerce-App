import firebase from 'firebase/app' 
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCQr6_PAvLIWxMV_F87DHUjJNV0FmmEK0g",
  authDomain: "e-commerce-app-61725.firebaseapp.com",
  databaseURL: "https://e-commerce-app-61725.firebaseio.com",
  projectId: "e-commerce-app-61725",
  storageBucket: "e-commerce-app-61725.appspot.com",
  messagingSenderId: "222299528901",
  appId: "1:222299528901:web:76e26e3d99f24c13499aac",
  measurementId: "G-2X4SBT5529"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
