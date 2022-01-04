var searchBtn = document.querySelector("#search-btn");
var resultEl = document.querySelector("#search-results");
var myBookEl = document.querySelector("#my-book-container");

var results = [];

var displaySearch = function() {
    var searchTerm = document.querySelector("#title").value;
    var apiKey = "AIzaSyAH_XNq1-MK1My5OziQ3WIbWCh4WQPxPV8"
    var endPoint = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`

    myBookEl.setAttribute("class", "hide");
    resultEl.removeAttribute("class");

    console.log(endPoint);
    fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
        .then(function(response) {
            console.log("hi");
            return response.json()
        })
        .then(function(data){
            console.log(data);
        }),
        function(error){
            console.log(error);
        }
    console.log(searchTerm);

    /* for (var i = 0; i < data.length; i++) {
        // append each person to our page
        var results = document.createElement("div");
        div.innerHTML = "Title" + data[i].title;
        results.appendChild(resultEl);
        console.log("it works");
    }
    */

} 


searchBtn.addEventListener("click", displaySearch);