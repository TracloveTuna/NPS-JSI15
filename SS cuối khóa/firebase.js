// setuo firebase


//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";

 import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBPal2lVOCCyXpOYbyqmY7pN_8jKGkdAlo",
   authDomain: "dat-lt.firebaseapp.com",
   projectId: "dat-lt",
   storageBucket: "dat-lt.appspot.com",
   messagingSenderId: "771213637659",
   appId: "1:771213637659:web:cdc4e16c706491fd24e0be",
   measurementId: "G-ZJQD90M4KR"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);  
 export const db = getFirestore(app)
//  export const analytics = getAnalytics(app);
