// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// import { getFirestore } from '@react-native-firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDvSWnQswKQgu8ZlEGXanKPDucD-1wBnDo',
  authDomain: 'spotal-aae7c.firebaseapp.com',
  projectId: 'spotal-aae7c',
  storageBucket: 'spotal-aae7c.firebasestorage.app',
  messagingSenderId: '220383326204',
  appId: '1:220383326204:web:fc6c94a1851b88d9fd4c79',
  measurementId: 'G-7BYKFXF8F3',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
