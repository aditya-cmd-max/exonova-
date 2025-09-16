// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyB7F1uRRiGdw489c_18aJeodbxrzsdFb5c",
  authDomain: "exonova-cd89c.firebaseapp.com",
  projectId: "exonova-cd89c",
  storageBucket: "exonova-cd89c.firebasestorage.app",
  messagingSenderId: "465326262278",
  appId: "1:465326262278:web:1b7f8f62e1f46c5ca7db87",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon
  });
});
