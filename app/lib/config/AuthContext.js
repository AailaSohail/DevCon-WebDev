// // lib/firebase.js
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore"; // Import Firestore

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAj7tb_mTxHZLXDNCVO3LvMoVVm2oXkMiA",
//   authDomain: "online-singing-competition.firebaseapp.com",
//   projectId: "online-singing-competition",
//   storageBucket: "online-singing-competition.firebasestorage.app",
//   messagingSenderId: "208066173245",
//   appId: "1:208066173245:web:81c4e056d423d424f40d54",
//   measurementId: "G-SC3FY9W66L",
// };

// // Initialize Firebase app (ensures app is initialized only once)
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// // Initialize Firebase services
// let analytics;
// if (typeof window !== "undefined") {
//   analytics = getAnalytics(app); // Analytics only works in the browser
// }

// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider(); // Use the same provider here
// const firestore = getFirestore(app); // Initialize Firestore

// export { app, analytics, auth, googleProvider, firestore }; // Make sure googleProvider is exported here
