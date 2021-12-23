// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ-eqplSjwcTbbHbewQzlUe9Y8otdbYto",
  authDomain: "book-store-69694.firebaseapp.com",
  projectId: "book-store-69694",
  storageBucket: "book-store-69694.appspot.com",
  messagingSenderId: "434964076450",
  appId: "1:434964076450:web:40c86964585bb16b8384fb",
};

// function start() {
//   const app = initializeApp(firebaseConfig);

//   var database = getDatabase(app);

//   var kitablar = [];

//   onValue(ref(database, "/"), (snapshot) => {
//     var data = snapshot.val();

//     console.log("Kitab melumatlari:", data);

//     if (data !== null) {
//       kitablar = data;
//     }

//     var kitablarUL = document.querySelector("#kitablar");
//     kitablarUL.innerHTML = "";

//     kitablar.forEach((kitab) => {
//       var li = document.createElement("li");
//       li.innerHTML = kitab.title;
//       kitablarUL.append(li);
//     });
//   });

//   document.querySelector("#add").addEventListener("click", function (e) {
//     var bookTitle = document.querySelector("#title").value;

//     kitablar.push({
//       title: bookTitle,
//     });

//     set(ref(database, "/"), kitablar);
//   });
// }

// export { start };
