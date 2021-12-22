var searchBtn = document.querySelector("#search-btn");

var displaySearch = function() {
    var searchTerm = document.querySelector("#title").value;
    var apiKey = "AIzaSyAH_XNq1-MK1My5OziQ3WIbWCh4WQPxPV8"
    var endPoint = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    console.log(endPoint);
    // fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    //     .then(function(response) {
    //         console.log("hi");
    //         return response.json()
    //     })
    //     .then(function(data){
    //         console.log(data);
    //     }),
    //     function(error){
    //         console.log(error);
    //     }
    console.log(searchTerm);
};

searchBtn.addEventListener("click", displaySearch);