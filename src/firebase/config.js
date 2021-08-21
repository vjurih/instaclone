import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCerK218FRei2dSibXozEYHO_ONB9hqCV8',
  authDomain: 'instaclone-2021.firebaseapp.com',
  projectId: 'instaclone-2021',
  storageBucket: 'instaclone-2021.appspot.com',
  messagingSenderId: '202728061500',
  appId: '1:202728061500:web:79100fb1faa73a149c2139',
}

// Init Firebase
firebase.initializeApp(firebaseConfig)

// Init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
