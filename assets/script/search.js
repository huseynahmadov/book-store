import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
    getDatabase,
    ref,
    onValue,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAJ-eqplSjwcTbbHbewQzlUe9Y8otdbYto",
    authDomain: "book-store-69694.firebaseapp.com",
    projectId: "book-store-69694",
    storageBucket: "book-store-69694.appspot.com",
    messagingSenderId: "434964076450",
    appId: "1:434964076450:web:40c86964585bb16b8384fb",
});

// var dataBook = {};

const db = getDatabase();
const getPath = ref(db, "newBooks/");
let value = $("#title").val();

let interval;

$("#title").on("input", function() {
    clearInterval(interval);

    interval = setTimeout(function() {
        onValue(getPath, (snapshot) => {
            let data = snapshot.val();

            $("#title-choices").empty();

            for (let book in data) {
                let obj = data[book];

                $("#title-choices").append(`
        <option>${obj.bookName}</option>
        `);
            }
        });
    }, 700);
});

$("#searchBook").on("click", function() {
    searchBook();
});

$(document).keypress(function(e) {
    if (e.keyCode == "13" && $(".form-control").is(":focus")) {
        searchBook();
    }
});

const searchBook = function() {
    let value = $("#title").val();
    onValue(getPath, (snapshot) => {
        let data = snapshot.val();
        $("#title-choices").empty();
        $("#books").empty();
        for (let book in data) {
            let obj = data[book];
            if (!value || obj === undefined) {
                $("#display-alert").removeClass("d-none");
                return;
            } else if (obj.bookName.toLowerCase().includes(value.toLowerCase())) {
                $("#display-alert").addClass("d-none");

                $("#books").append(`
        <div class="card rounded" >
          <img src="${obj.imageUrl}"  class="card-img-top img-fluid rounded" alt="${obj.bookName}" >
          <div class="card-body text-center rounded">
            <p class="card-title">${obj.bookName}</p>
            <p class="card-text">${obj.authorName}.</p>
            <a href="#" class="btn btn-primary read-more-btn">Read more</a>
          </div>
        </div>
        `);
            }
        }
    });
};

// obj.bookName == value
// $("#display-alert").addClass("d-none");
// $("#book-img").attr("src", obj.imageUrl);
// $("#book-name").text(obj.bookName);
// $("#author-name").text(obj.authorName);

// {
//   /* <img src="${obj.imageUrl} /">
// <div>${obj.bookName}</div>
// <div>${obj.authorName}</div>
// <button class="btn btn-primary">Read more</button> */
// }
//////////////////