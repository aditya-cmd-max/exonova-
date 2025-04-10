// Rellax.js scroll animation
new Rellax('.rellax');

// Anime.js entry animation
anime({
  targets: '.headline',
  translateY: [-100, 0],
  opacity: [0, 1],
  duration: 1500,
  easing: 'easeOutExpo'
});

anime({
  targets: '.slogan',
  translateY: [50, 0],
  opacity: [0, 1],
  delay: 600,
  duration: 1000,
  easing: 'easeOutExpo'
});

anime({
  targets: '.anime-fade',
  opacity: [0, 1],
  translateX: [-100, 0],
  delay: 1000,
  duration: 1200,
  easing: 'easeOutExpo'
});

// Barba.js smooth page transition
barba.init({
  transitions: [{
    name: 'fade',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0,
        duration: 0.5
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0,
        duration: 0.5
      });
    }
  }]
});


// Animate testimonials & mission cards
anime({
  targets: '.mission-card, .testimonial',
  opacity: [0, 1],
  translateY: [50, 0],
  delay: anime.stagger(300),
  duration: 1000,
  easing: 'easeOutCubic'
});



// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Your Firebase config here
const firebaseConfig = {
 apiKey: "AIzaSyB7F1uRRiGdw489c_18aJeodbxrzsdFb5c",
  authDomain: "exonova-cd89c.firebaseapp.com",
  projectId: "exonova-cd89c",
  storageBucket: "exonova-cd89c.firebasestorage.app",
  messagingSenderId: "465326262278",
  appId: "1:465326262278:web:1b7f8f62e1f46c5ca7db87",
  measurementId: "G-GGG45V0PEF"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set };

import { db, ref, set } from "./firebase.js";

document.getElementById("subscribeBtn").addEventListener("click", () => {
  const email = document.getElementById("emailInput").value.trim();

  if (!email || !email.includes("@")) {
    alert("Please enter a valid email address!");
    return;
  }

  const emailRef = ref(db, 'subscribers/' + email.replace(/\./g, "_"));
  set(emailRef, {
    email: email,
    subscribedAt: new Date().toISOString()
  })
  .then(() => {
    alert("🎉 Subscribed successfully!");
    document.getElementById("emailInput").value = "";
  })
  .catch(error => {
    console.error("Error subscribing:", error);
    alert("❌ Failed to subscribe. Try again.");
  });
});



// Toggle nav menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// GSAP Animation
gsap.from('.nav-logo', {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: 'bounce.out'
});

gsap.from('.nav-links li', {
  duration: 1,
  y: -20,
  opacity: 0,
  stagger: 0.1,
  delay: 0.2
});
