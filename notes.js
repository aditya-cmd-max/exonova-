
// Firebase Configuration
const firebaseConfig = {
 apiKey: "AIzaSyB7F1uRRiGdw489c_18aJeodbxrzsdFb5c",
  authDomain: "exonova-cd89c.firebaseapp.com",
  projectId: "exonova-cd89c",
  storageBucket: "exonova-cd89c.firebasestorage.app",
  messagingSenderId: "465326262278",
  appId: "1:465326262278:web:1b7f8f62e1f46c5ca7db87",
  measurementId: "G-GGG45V0PEF"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// LOGIN FUNCTION
function handleLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("loginPopup").style.display = "none";
      document.getElementById("uploadSection").style.display = "flex";
    })
    .catch((error) => {
      document.getElementById("loginError").innerText = error.message;
    });
}

// UPLOAD FUNCTION
function uploadNote() {
  const title = document.getElementById("noteTitle").value;
  const topic = document.getElementById("noteTopic").value;
  const content = document.getElementById("noteContent").value;
  const thumbnailFile = document.getElementById("thumbnail").files[0];

  const reader = new FileReader();
  reader.onloadend = () => {
    const noteData = {
      title,
      topic,
      content,
      thumbnail: reader.result,
      date: new Date().toISOString()
    };
    db.ref("notes/").push(noteData).then(() => {
      window.location.href = "notes.html";
    });
  };

  if (thumbnailFile) {
    reader.readAsDataURL(thumbnailFile);
  }
}

// DISPLAY NOTES
window.onload = function () {
  const listDiv = document.getElementById("noteList");
  if (listDiv) {
    db.ref("notes/").once("value", (snapshot) => {
      snapshot.forEach((child) => {
        const note = child.val();
        const card = document.createElement("div");
        card.className = "note-card";
        card.innerHTML = `
          <img src="${note.thumbnail}" alt="Note Thumbnail" />
          <h3>${note.title}</h3>
          <p><strong>Topic:</strong> ${note.topic}</p>
          <div class="note-content">${note.content}</div>
        `;
        listDiv.appendChild(card);
      });
    });
  }
};

// LOGIN BUTTON (SHOW POPUP)
document.getElementById("loginBtn")?.addEventListener("click", () => {
  document.getElementById("loginPopup").style.display = "flex";
});
