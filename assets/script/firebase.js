import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// import {
//   getDatabase,
//   ref,
//   set,
//   onValue,
// } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import {
    getAuth,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
// const firebaseConfig = {
//   apiKey: "AIzaSyDUUjOIVctqnzMjD5gEGITXsjWu_O2oOvM",
//   authDomain: "bookstore-f7e2c.firebaseapp.com",
//   databaseURL: "https://bookstore-f7e2c-default-rtdb.firebaseio.com",
//   projectId: "bookstore-f7e2c",
//   storageBucket: "bookstore-f7e2c.appspot.com",
//   messagingSenderId: "522070526624",
//   appId: "1:522070526624:web:6306f8fcf17e20ebeed7c5",
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);
// writeUserData("001", "Elnur", "Hasanov");
// writeUserData("002", "Teymur", "Hasanov");
// function writeUserData(userId, name, surname) {
//   set(ref(db, "users/" + userId), {
//     username: name,
//     usersurname: surname,
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