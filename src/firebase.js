// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrXxKHhDypy4ZQMbgyZ0HHVn-fbzwUMIE",
  authDomain: "my-web-app-57985.firebaseapp.com",
  projectId: "my-web-app-57985",
  storageBucket: "my-web-app-57985.appspot.com",
  messagingSenderId: "365369140587",
  appId: "1:365369140587:web:ba7a03a1e0160d8757982e",
  measurementId: "G-SLQB4CK1WG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

const analytics = getAnalytics(app);

export default getFirestore(app);

