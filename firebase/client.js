import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyChcxQHeADUxMKVwauUr1JJop_U-K9fAK0',
  authDomain: 'medium-clone-12b1d.firebaseapp.com',
  projectId: 'medium-clone-12b1d',
  storageBucket: 'medium-clone-12b1d.appspot.com',
  messagingSenderId: '835959827908',
  appId: '1:835959827908:web:3dc9de52c8b941e0d28891'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()

export const fetchJobs = () => {
  return db.collection('jobs')
    .get()
    .then(snapshot => {
      return snapshot.docs.map(doc => {
        const data = doc.data()
        const id = doc.id

        return {
          id,
          ...data
        }
      })
    })
}

const mapUserFromFirebaseAuth = (user) => {
  const { displayName, photoURL } = user
  return {
    avatar: photoURL,
    username: displayName
  }
}

export const onAuthStateChange = (onChange) => {
  return firebase
    .auth()
    .onAuthStateChanged(user => {
      const normalizedUser = mapUserFromFirebaseAuth(user)
      onChange(normalizedUser)
    })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
}
