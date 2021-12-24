import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// import {
//   getDatabase,
//   ref,
//   set,
//   onValue,
// } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import {
    getDatabase,
    ref,
    set,
    onValue,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAJ-eqplSjwcTbbHbewQzlUe9Y8otdbYto",
//   authDomain: "book-store-69694.firebaseapp.com",
//   projectId: "book-store-69694",
//   storageBucket: "book-store-69694.appspot.com",
//   messagingSenderId: "434964076450",
//   appId: "1:434964076450:web:40c86964585bb16b8384fb",
// };

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
// const starCountRef = ref(db, "/");
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   console.log(data);
// });
////////////////////////////////////////////////////////////////////////////////////////
const firebaseApp = initializeApp({
    apiKey: "AIzaSyDUUjOIVctqnzMjD5gEGITXsjWu_O2oOvM",
    authDomain: "bookstore-f7e2c.firebaseapp.com",
    databaseURL: "https://bookstore-f7e2c-default-rtdb.firebaseio.com",
    projectId: "bookstore-f7e2c",
    storageBucket: "bookstore-f7e2c.appspot.com",
    messagingSenderId: "522070526624",
    appId: "1:522070526624:web:6306f8fcf17e20ebeed7c5",
});
const auth = getAuth(firebaseApp);
var join = $(".join");
join.on("click", function(e) {
    const email = $(".username").val();
    const password = $(".password").val();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("user logged in:", userCredential.user);
            window.location = "/admin.html";
        })
        .catch((error) => {
            console.log(error.message);
            //   const errorCode = error.code;
            const errorMessage = error.message;
        });
});