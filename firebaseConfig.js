// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOvInAWOp2B-ekv3Km-8rV9vgbh-MedjY",
  authDomain: "test1-a9516.firebaseapp.com",
  projectId: "test1-a9516",
  storageBucket: "test1-a9516.appspot.com",
  messagingSenderId: "676296729698",
  appId: "1:676296729698:web:5cc412bccaf043951a1d3b",
  measurementId: "G-1SN52YGZHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);