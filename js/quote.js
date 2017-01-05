"use strict";

var quote = $("#quoteText");
var author = $("#quoteAuthor");


$(document).ready(function() {
    getQuote();
});


function getQuote() {
    var request = $.ajax({
        url: "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
        dataType: "jsonp"
    });

    request.done(function(data) {
      console.log(data);
        quote.text(data.quoteText);
        author.text(data.quoteAuthor);
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}
