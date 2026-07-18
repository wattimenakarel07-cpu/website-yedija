import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA4Uje8SWc7BXVW2wlFcXX6dfw2rcPVZi0",
  authDomain: "karel-web-2.firebaseapp.com",
  projectId: "karel-web-2",
  storageBucket: "karel-web-2.firebasestorage.app",
  messagingSenderId: "160144388488",
  appId: "1:160144388488:web:723bd2e963a99d42020a3d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

window.loginGoogle = async function () {
  try {
    const result = await signInWithPopup(auth, provider);
    alert("Selamat datang, " + result.user.displayName + "!");
  } catch (error) {
    alert("Login gagal: " + error.message);
  }
};

window.logoutGoogle = async function () {
  await signOut(auth);
  alert("Berhasil logout.");
};

onAuthStateChanged(auth, (user) => {
    const nama = document.getElementById("userName");

    if (user) {
        nama.innerHTML = "👋 " + user.displayName;
    } else {
        nama.innerHTML = "Belum login";
    }
});