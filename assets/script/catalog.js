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
let clearAllBook = function(emptyDiv, bookType) {
    onValue(booksInfo, (snapshot) => {
        const data = snapshot.val();

        for (let result in data) {
            var books = data[result];
            if (books.bookType === `${bookType}`) {
                let newBook = $(`<div class = "rounded text-center">
            <div class="card shadow p-3 rounded" style="width: 15rem; ">
                <img class="card-img-top img-fluid " src="${books.imageUrl}" alt="Card image cap " style="height: 200px; ">
                <div class="card-body ">
                    <h5 class="card-title text-center " style="width:100%; height:90px">${books.bookName}</h5>
                    <p class="card-text text-center " style="height:90px">${books.authorName}</p>
                    <a href="# " class="btn btn-primary read-more">Read more</a>
                </div>
            </div>
        </div>`);

                $(emptyDiv).append(newBook);
            }
        }

        $(document).ready(function() {
            $(emptyDiv).not(".slick-initialized").slick({
                infinite: true,
                slidesToShow: 3,
                lazyLoad: "ondemand",
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: true,
            });
        });
    });
};
var myArray = [];

let uniqueBookType = function(booksTypes) {
    $.each(booksTypes, function(index, bookType) {
        clearAllBook("#bestseller", bookType);
        clearAllBook("#all-books-slick", bookType);
    });
};

let allBookstypes = function() {
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

let hideCategories = function() {
    $("#all-categories").children().addClass("d-none");
};

$("#crime").on("click", function() {
    hideCategories();
    $("#crime-slick").removeClass("d-none");
});

$("#detective").on("click", function() {
    hideCategories();
    $("#detective-slick").removeClass("d-none");
});

$("#adventures").on("click", function() {
    hideCategories();
    $("#adventures-slick").removeClass("d-none");
});

$("#fantastic").on("click", function() {
    hideCategories();
    $("#fantastic-slick").removeClass("d-none");
});