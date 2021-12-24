var dataBook = {};

var interval;

$("#title").on("input", function() {
    var value = $(this).val();

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
        }).done(function(response) {
            $("#title-choices").empty();
            for (let book of response) {
                dataBook[book.title] = book;

                $("#title-choices").append(
                    '<option value="' + book.title + '">' + book.title + "</option>"
                );
            }
        });
    }, 500);
});

$(document).on("click", "#searchBook", function() {
    var value = $("#title").val();
    var result = dataBook[value];

    $("#book-img").attr("src", result.smallImageURL);
    $("#book-name").text(result.title);
    $("#author-name").text(result.author);
    //   Create div
});