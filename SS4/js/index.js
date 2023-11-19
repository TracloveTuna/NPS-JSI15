// Khởi tạo logic hoạt động web tại đây.
const init = () => {
    console.log("Windows Loaded");



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




  
  


  firebase.initializeApp(firebaseConfig);
    view.setActiveScreen("registerScreen");
  
  }
  
  window.onload = init;