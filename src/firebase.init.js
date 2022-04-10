// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALbGZTRTdC8KIpNFFyp8H-1uCf9ePXA5I",
  authDomain: "ema-john-simple-d0152.firebaseapp.com",
  projectId: "ema-john-simple-d0152",
  storageBucket: "ema-john-simple-d0152.appspot.com",
  messagingSenderId: "988485205911",
  appId: "1:988485205911:web:9f204be12f49517fbe8ed2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;