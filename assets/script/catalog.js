import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAJ-eqplSjwcTbbHbewQzlUe9Y8otdbYto",
  authDomain: "book-store-69694.firebaseapp.com",
  projectId: "book-store-69694",
  storageBucket: "book-store-69694.appspot.com",
  messagingSenderId: "434964076450",
  appId: "1:434964076450:web:40c86964585bb16b8384fb",
});

const db = getDatabase();
const booksInfo = ref(db, "newBooks/");
let clearAllBook = function (emptyDiv, bookType) {
  onValue(booksInfo, (snapshot) => {
    const data = snapshot.val();

    for (let result in data) {
      var books = data[result];
      if (books.bookType === `${bookType}`) {
        let newBook = $(`<div class = "rounded text-center">
            <div class="card shadow p-3 rounded" style="width: 15rem; ">
                <img class="card-img-top img-fluid " src="${books.imageUrl}" alt="Card image cap " style="height: 200px; ">
                <div class="card-body ">
                    <h5 class="card-title text-center book-name" style="height:120px">${books.bookName}</h5>
                    <p class="card-text text-center " style="height: 70px">${books.authorName}</p>
                    <button class="btn btn-primary read-more" data-name="${books.bookName}">Read more</button>
                </div>
            </div>
        </div>`);

        $(emptyDiv).append(newBook);
      }
    }
    $(document).ready(function () {
      $(emptyDiv).slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,

        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1008,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },

            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    });
  });
};
var myArray = [];

let uniqueBookType = function (booksTypes) {
  $.each(booksTypes, function (index, bookType) {
    clearAllBook("#bestseller", bookType);
    clearAllBook("#all-books-slick", bookType);
  });
};
let allBookstypes = function () {
  onValue(booksInfo, (snapshot) => {
    const data = snapshot.val();
    for (let booktype in data) {
      var result = data[booktype];
      if (!myArray.includes(result.bookType)) {
        myArray.push(result.bookType);
      }
    }
    uniqueBookType(myArray);
  });
};

allBookstypes();
clearAllBook("#fantastic-slick", "Fantastic");
clearAllBook("#crime-slick", "Crime");
clearAllBook("#detective-slick", "Detective");
clearAllBook("#adventures-slick", "Adventure");
clearAllBook("#drama-slick", "Drama");
clearAllBook("#tragedy-slick", "Tragedy");
clearAllBook("#motivational-slick", "Motivational");
clearAllBook("#thriller-slick", "Thriller");
clearAllBook("#horror-slick", "Horror");

let hideCategories = function () {
  $("#all-categories").children().addClass("d-none");
};

$("#horror").on("click", function () {
  hideCategories();
  $("#horror-slick").removeClass("d-none");
});

$("#drama").on("click", function () {
  hideCategories();
  $("#drama-slick").removeClass("d-none");
});

$("#thriller").on("click", function () {
  hideCategories();
  $("#thriller-slick").removeClass("d-none");
});

$("#motivational").on("click", function () {
  hideCategories();
  $("#motivational-slick").removeClass("d-none");
});

$("#crime").on("click", function () {
  hideCategories();
  $("#crime-slick").removeClass("d-none");
});

$("#tragedy").on("click", function () {
  hideCategories();
  $("#tragedy-slick").removeClass("d-none");
});

$("#detective").on("click", function () {
  hideCategories();
  $("#detective-slick").removeClass("d-none");
});

$("#adventures").on("click", function () {
  hideCategories();
  $("#adventures-slick").removeClass("d-none");
});

$("#fantastic").on("click", function () {
  hideCategories();
  $("#fantastic-slick").removeClass("d-none");
});

$(document).on("click", ".read-more", function () {
  $(".catalog-section").addClass("d-none");
  $(".read-more-section").removeClass("d-none");

  const readMore = ref(db, "newBooks/");
  onValue(readMore, (snapshot) => {
    const allInfos = snapshot.val();
    for (let result in allInfos) {
      let infos = allInfos[result];
      if ($(this).data("name") === infos.bookName) {
        $("#book-name").text(infos.bookName);
        $("#author-name").text(infos.authorName);
        $(".book-img").attr("src", infos.imageUrl);
        $("#public-year").text(infos.publicYear);
        $("#introduction").text(infos.description);
      }
    }
  });
});

$(".back-btn").on("click", function () {
  window.location = "/catalog.html";
});
