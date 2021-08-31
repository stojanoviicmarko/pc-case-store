// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDbLhhtfEKZ6SB1o9sbn5buhWd9oeVQ3Dk',
  authDomain: 'pc-case-store.firebaseapp.com',
  databaseURL:
    'https://pc-case-store-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'pc-case-store',
  storageBucket: 'pc-case-store.appspot.com',
  messagingSenderId: '404721314800',
  appId: '1:404721314800:web:5e197b8649004f22d88b35',
  measurementId: 'G-R4TG2L1FN8'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.database()
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth, database }
