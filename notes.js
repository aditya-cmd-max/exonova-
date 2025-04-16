// script.js (Updated for Firebase Realtime Database integration with login)

// Firebase config - replace with your own config
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
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// Login Popup Handling
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("loginPopup").style.display = "none";
      document.getElementById("uploadSection").style.display = "block";
    })
    .catch(error => alert("Login Failed: " + error.message));
});

// Upload Notes Functionality
document.getElementById("uploadBtn").addEventListener("click", () => {
  const title = document.getElementById("noteTitle").value;
  const topic = document.getElementById("noteTopic").value;
  const content = document.getElementById("noteContent").value;
  const thumbnailUrl = document.getElementById("noteThumbnail").value;

  const user = auth.currentUser;
  if (!user) {
    alert("You must be logged in to upload notes.");
    return;
  }

  const note = {
    title,
    topic,
    content,
    thumbnailUrl,
    userId: user.uid,
    createdAt: new Date().toISOString()
  };

  db.ref("notes").push(note)
    .then(() => {
      alert("Note uploaded successfully!");
      window.location.href = "notes.html";
    })
    .catch(error => alert("Upload failed: " + error.message));
});

// Load Notes in notes.html
function loadNotes() {
  const notesContainer = document.getElementById("notesContainer");
  if (!notesContainer) return;

  db.ref("notes").once("value")
    .then(snapshot => {
      snapshot.forEach(childSnapshot => {
        const note = childSnapshot.val();

        const card = document.createElement("div");
        card.className = "note-card";

        card.innerHTML = `
          <img src="${note.thumbnailUrl}" alt="Thumbnail">
          <h3>${note.title}</h3>
          <p><strong>Topic:</strong> ${note.topic}</p>
          <p>${note.content}</p>
        `;

        notesContainer.appendChild(card);
      });
    });
}

// Automatically run loadNotes if on notes.html
window.addEventListener("load", loadNotes);
