import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyA4Uje8SWc7BXVW2wlFcXX6dfw2rcPVZi0",
  authDomain: "karel-web-2.firebaseapp.com",
  projectId: "karel-web-2",
  storageBucket: "karel-web-2.firebasestorage.app",
  messagingSenderId: "160144388488",
  appId: "1:160144388488:web:723bd2e963a99d42020a3d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
getRedirectResult(auth)
  .then((result) => {
    if (result?.user) {
      alert("Selamat datang, " + result.user.displayName + "!");
    }
  })
  .catch((error) => {
    console.error(error);
  });

window.loginGoogle = async function () {

  const isMobile =
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  try {

    if (isMobile) {

      await signInWithRedirect(auth, provider);

    } else {

      const result = await signInWithPopup(auth, provider);

      alert("Selamat datang, " + result.user.displayName + "!");

    }

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
    const tombol = document.getElementById("btnLogin");

    if (user) {

        nama.innerHTML = "👋 " + user.displayName;

        tombol.innerHTML = "🚪 Logout";
        tombol.onclick = logoutGoogle;

    } else {

        nama.innerHTML = "Belum login";

        tombol.innerHTML = "👤 Masuk";
        tombol.onclick = loginGoogle;

    }

});
window.simpanPosting = async function (isi) {

  try {

    await addDoc(collection(db, "posts"), {
      text: isi
    });

    alert("Posting berhasil disimpan!");

  } catch (error) {

    alert("Gagal menyimpan: " + error.message);

  }

};
window.ambilPosting = async function () {

  const snapshot = await getDocs(collection(db, "posts"));

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

};
