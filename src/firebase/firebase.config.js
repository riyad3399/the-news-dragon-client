// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log('environment variable', import.meta.env.VITE_authDomain);

const firebaseConfig = {
  apiKey: "AIzaSyCGJ-EeHlGjgNl_JIBnbFkQgby5qqECJlo",
  authDomain: "the-news-dragon-client-c4cb0.firebaseapp.com",
  projectId: "the-news-dragon-client-c4cb0",
  storageBucket: "the-news-dragon-client-c4cb0.appspot.com",
  messagingSenderId: "225404936687",
  appId: "1:225404936687:web:4adf4873b07e3a454e961a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;