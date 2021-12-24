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
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
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