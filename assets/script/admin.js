// =================================
// Hamburger menu
// =================================
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("active");
});

// =================================
// Get and Set data
// =================================
let dataBook = {};

let interval;

$("#admin-search").on("input", function () {
  $("#searchAdminResult").removeClass("d-none");

  if ($("#admin-search").val().length === 0) {
    $("#searchAdminResult").addClass("d-none");
  }
  let value = $(this).val();

  clearInterval(interval);

  interval = setTimeout(() => {
    $.ajax({
      crossDomain: true,
      url: "https://goodreads-books.p.rapidapi.com/search",
      method: "GET",
      headers: {
        "x-rapidapi-host": "goodreads-books.p.rapidapi.com",
        "x-rapidapi-key": "9d9588302emsh58804fa5a30d4d9p1b947ajsn659ea6ae2269",
      },
      data: {
        q: value,
        page: 1,
      },
    }).done(function (response) {
      //   $("#title-choices").empty();
      for (let book of response) {
        dataBook[book.title] = book;

        $("#search-result-list").append(
          `<div class="search-result-item cursor-pointer" data-list="${book.title}"><i class="far fa-clock"></i> ${book.title}</div>`
        );
      }
    });
  }, 500);
});

$(document).on("click", ".search-result-item", function () {
  let bookName = $(this).data("list");
  let obj = dataBook[bookName];
  $("#bf-book-name").val(obj.title);
  $("#bf-author-name").val(obj.author);
  $("#bf-image-url").val(obj.smallImageURL);
  $("#searchAdminResult").addClass("d-none");
  $("#admin-search").val("");
});
