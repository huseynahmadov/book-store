// var dataBook = {};

// var interval;

// $("#title").on("input", function() {
//     var value = $(this).val();

//     clearInterval(interval);

//     interval = setTimeout(() => {
//         $.ajax({
//             crossDomain: true,
//             url: "https://goodreads-books.p.rapidapi.com/search",
//             method: "GET",
//             headers: {
//                 "x-rapidapi-host": "goodreads-books.p.rapidapi.com",
//                 "x-rapidapi-key": "9d9588302emsh58804fa5a30d4d9p1b947ajsn659ea6ae2269",
//             },
//             data: {
//                 q: value,
//                 page: 1,
//             },
//         }).done(function(response) {
//             $("#title-choices").empty();
//             for (let book of response) {
//                 dataBook[book.title] = book;

//                 $("#title-choices").append(
//                     '<option value="' + book.title + '">' + book.title + "</option>"
//                 );
//             }
//         });
//     }, 500);
// });

// $(document).on("click", "#searchBook", function() {
//     //
//     var value = $("#title").val();
//     var result = dataBook[value];
//     console.log(result);
//     if (!value || result === undefined) {
//         $("#display-alert").removeClass("d-none");
//         return;
//     }

//     $("#display-alert").addClass("d-none");
//     $("#book-img").attr("src", result.smallImageURL);
//     $("#book-name").text(result.title);
//     $("#author-name").text(result.author);
//     //   Create div
// });

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

let interval;

$("#title").on("input", function () {
  clearInterval(interval);

  interval = setTimeout(function () {
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
  }, 500);
});

$("#searchBook").on("click", function () {
  let value = $("#title").val();
  onValue(getPath, (snapshot) => {
    let data = snapshot.val();
    $("#title-choices").empty();

    for (let book in data) {
      let obj = data[book];

      if (!value || obj === undefined) {
        $("#display-alert").removeClass("d-none");
        return;
      } else if (obj.bookName == value) {
        $("#display-alert").addClass("d-none");
        $("#book-img").attr("src", obj.imageUrl);
        $("#book-name").text(obj.bookName);
        $("#author-name").text(obj.authorName);
      }
    }
  });
});
