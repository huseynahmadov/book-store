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

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyAJ-eqplSjwcTbbHbewQzlUe9Y8otdbYto",
    authDomain: "book-store-69694.firebaseapp.com",
    projectId: "book-store-69694",
    storageBucket: "book-store-69694.appspot.com",
    messagingSenderId: "434964076450",
    appId: "1:434964076450:web:40c86964585bb16b8384fb",
});


const db = getDatabase();

window.onload = booksLoad;

function booksLoad() {
    const booksInfo = ref(db, "newBooks/");
    onValue(booksInfo, (snapshot) => {
        const data = snapshot.val();


        for (let result in data) {

            let books = data[result];

            let newBook = $(`<div>
            <div class="card " style="width: 15rem; ">
                <img class="card-img-top " src="${books.imageUrl}" alt="Card image cap " style="height: 200px; ">
                <div class="card-body ">
                    <h5 class="card-title text-center ">${books.bookName}</h5>
                    <p class="card-text text-center ">${books.authorName}</p>
                    <a href="# " class="btn btn-primary " style="margin-left: 22% !important ">Read more</a>
                </div>
            </div>
        </div>`);
            $('.items').append(newBook)


        }

        $('.asass').html('<script src="./assets/script/slider.js " defer></script>')
    });
}

$('.fantastic').on('click', function() {

    $(".fantastic").off('click');
    $("#adventures").on('click');
    $('.items').css("display", "none");
    $('#adventure').css("display", "none")
    $('.fantastics').css("display", "block")
    const booksInfo = ref(db, "newBooks/");
    onValue(booksInfo, (snapshot) => {
        const data = snapshot.val();


        for (let result in data) {
            var books = data[result];
            if (books.bookType === 'Fantastic') {


                let newBook = $(`<div>
            <div class="card " style="width: 15rem; ">
                <img class="card-img-top " src="${books.imageUrl}" alt="Card image cap " style="height: 200px; ">
                <div class="card-body ">
                    <h5 class="card-title text-center ">${books.bookName}</h5>
                    <p class="card-text text-center ">${books.authorName}</p>
                    <a href="# " class="btn btn-primary " style="margin-left: 22% !important ">Read more</a>
                </div>
            </div>
        </div>`);

                $('.fantastics').append(newBook)
            }

        }

        $('.asass').html('<script src="./assets/script/slider2.js " defer></script>')
    });

})
$("#adventures").on('click', function() {
    $("#adventures").off('click');
    $(".fantastic").on('click');
    $(".fantastics").css("display", "none");
    $('.items').css("display", "none");
    $('#adventure').css("display", "block")

    const booksInfo = ref(db, "newBooks/");
    onValue(booksInfo, (snapshot) => {
        const data = snapshot.val();


        for (let result in data) {
            var books = data[result];
            if (books.bookType === 'Adventure') {


                let newBook = $(`<div>
            <div class="card " style="width: 15rem; ">
                <img class="card-img-top " src="${books.imageUrl}" alt="Card image cap " style="height: 200px; ">
                <div class="card-body ">
                    <h5 class="card-title text-center " style="height:60px">${books.bookName}</h5>
                    <p class="card-text text-center " style="height:80px">${books.authorName}</p>
                    <a href="# " class="btn btn-primary " style="margin-left: 22% !important ">Read more</a>
                </div>
            </div>
        </div>`);

                $('#adventure').append(newBook)
            }
        }
        $('.asass').html('<script src="./assets/script/slider3.js " defer></script>')
    });
})



console.log('salam')