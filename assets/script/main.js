import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

import {
    getDatabase,
    ref,
    set,
    onValue,
    push,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAJ-eqplSjwcTbbHbewQzlUe9Y8otdbYto",
    authDomain: "book-store-69694.firebaseapp.com",
    projectId: "book-store-69694",
    storageBucket: "book-store-69694.appspot.com",
    messagingSenderId: "434964076450",
    appId: "1:434964076450:web:40c86964585bb16b8384fb",
});

// ==============
// SIGN IN ADMIN PANEL
// ==============
let userId = 1;

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const auth = getAuth(firebaseApp);
var join = $(".join");
join.on("click", function(e) {
    const email = $(".username").val();
    const password = $(".password").val();

    var MinLength = 6;
    var MaxLength = 15;
    if (password.length < MinLength || password.length > MaxLength) {
        $("#password-error-message").text("Şifrə 6-12 aralığı olmadır");
        $("#password-error-message").css({
            color: "red",
        });
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("user logged in:", userCredential.user);

            document.querySelector(".login-container").classList.add("d-none");
            document.querySelector(".myGif").src =
                "assets/images/Infinity-1s-200px.gif";

            setTimeout(function() {
                document.querySelector(".myGif").src = "";
                window.location = "./admin.html";
            }, 3000);
        })
        .catch((error) => {
            console.log(error.message);
            //  Email validate
            const $result = $("#email-error-message");
            const email = $(".username").val();
            $result.text("");

            if (!validateEmail(email)) {
                $result.text("düzgün email adresi daxil edin");
                $result.css({
                    color: "red",
                    "font-size": "20px",
                    "font-weight": "400",
                });
                return false;
            }
        });
});

// ==============
// SIGN OUT ADMIN PANEL
// ==============
$(document).on("click", "#log-out", function() {
    console.log("asd");
    signOut(auth)
        .then((userCredential) => {
            window.location = "./admin-login.html";
            console.log("userCredential");
        })
        .catch((error) => {
            console.log(error.message);
        });
});

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyAJ-eqplSjwcTbbHbewQzlUe9Y8otdbYto",
    authDomain: "book-store-69694.firebaseapp.com",
    projectId: "book-store-69694",
    storageBucket: "book-store-69694.appspot.com",
    messagingSenderId: "434964076450",
    appId: "1:434964076450:web:40c86964585bb16b8384fb",
});

// const app = initializeApp(firebaseConfig);
const db = getDatabase();

$("#send-button").on("click", function() {
    let name = $("#name").val();
    let surname = $("#surname").val();
    let email = $("#email").val();
    let phone = $("#phone").val();

    var objKey = push(ref(db, "/")).key;

    set(ref(db, "contact-us-infos/" + objKey), {
        username: name,
        surname: surname,
        email,
        phone,
    });
});

/* 


        WRITE CONTACT TO ADMIN PANEL


*/

// ==============
// WRITE CONTACT INFOS FROM FIREBASE TO ADMIN PANEL
// ==============

const starCountRef = ref(db, "contact-us-infos/");
onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    let count = 0;

    $("#contact-infos").empty();

    for (let result in data) {
        count++;

        var users = data[result];

        var newDatas = $(`<tr>
            <th scope="row">${count}</th>
            <td>${users.username}</td>
            <td>${users.surname}</td>
            <td>${users.email}</td>
            <td>${users.phone}</td>
            </tr>`);

        $("#contact-infos").append(newDatas);
    }
});

// ==============
// WRITE JOIN US INFOS FROM FIREBASE TO ADMIN PANEL
// ==============

$("#join-us").on("click", function() {
    let name = $("#modal-firstname").val();
    let surname = $("#modal-surname").val();
    let email = $("#modal-email").val();

    var objKey = push(ref(db, "/")).key;
    set(ref(db, "join-us-infos/" + objKey), {
        username: name,
        surname,
        email,
    });
});

const usersInfos = ref(db, "join-us-infos/");
onValue(usersInfos, (snapshot) => {
    const data = snapshot.val();
    let count = 0;

    $("#join-us-infos").empty();

    for (let result in data) {
        count++;

        var users = data[result];

        var newDatas = $(`<tr>
            <th scope="row">${count}</th>
            <td>${users.username}</td>
            <td>${users.surname}</td>
            <td>${users.email}</td>
            </tr>`);

        $("#join-us-infos").append(newDatas);
    }
});

/* 


        BOOK FORM


*/

// ==============
// ADD NEW BOOK
// ==============
$("#bf-add-btn").on("click", function(e) {
    let bookName = $("#bf-book-name").val();
    let authorName = $("#bf-author-name").val();
    let imageUrl = $("#bf-image-url").val();
    let description = $("#bf-description").val();
    let bookType = $("#bf-book-type").val();

    var objKey = push(ref(db, "/")).key;
    set(ref(db, "newBooks/" + objKey), {
        bookName,
        authorName,
        imageUrl,
        description,
        bookType,
    });
});

/* 


        ABOUT STORE


*/

// ==============
// ADD NEW BOOK
// ==============
$("#about-btn").on("click", function(e) {
    let titleName = $("#about-name").val();
    let imageUrl = $("#about-img-url").val();
    let description = $("#about-description").val();

    var objKey = push(ref(db, "/")).key;
    set(ref(db, "aboutStore/" + objKey), {
        titleName,
        imageUrl,
        description,
    });
});