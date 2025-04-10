// Your Firebase config
const firebaseConfig = {
   apiKey: "AIzaSyB7F1uRRiGdw489c_18aJeodbxrzsdFb5c",
  authDomain: "exonova-cd89c.firebaseapp.com",
  projectId: "exonova-cd89c",
  storageBucket: "exonova-cd89c.firebasestorage.app",
  messagingSenderId: "465326262278",
  appId: "1:465326262278:web:1b7f8f62e1f46c5ca7db87",
  measurementId: "G-GGG45V0PEF"
};

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Handle Form
document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const subscribersRef = ref(database, "subscribers");
  push(subscribersRef, {
    name: name,
    email: email,
    subscribedAt: new Date().toISOString()
  });

  
 

   
   document.getElementById("successMessage").innerText = "🎉 You’re subscribed!";
  document.getElementById("newsletterForm").reset();
});

  window.location.href = "thankyou.html";
