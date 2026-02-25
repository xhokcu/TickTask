// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// eslint-disable-next-line import/named
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getFirestore } from '@react-native-firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBNIIVJGGidJex_ozLp9F9g3nc34mXsPf4',
  authDomain: 'ticktask-bbcb8.firebaseapp.com',
  projectId: 'ticktask-bbcb8',
  storageBucket: 'ticktask-bbcb8.firebasestorage.app',
  messagingSenderId: '695026261699',
  appId: '1:695026261699:web:0e6aba47b9cb455cb4cc76',
  measurementId: 'G-7ECKX8WJ9K',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
