//global variables
var searchBtn = document.querySelector("#search-btn");
var resultEl = document.querySelector("#search-results");
var myBookEl = document.querySelector("#my-book-container");
var bookMonthEl = document.querySelector("#book-of-the-month")
var currentReadEl = document.querySelector(".currently-reading");
var toReadEl = document.querySelector(".to-read-list");
var readEl = document.querySelector(".read-list");

// function to display items from search bar
var displaySearch = async function (event) {
    event.preventDefault();
    var searchTerm = document.querySelector("#title").value;
    searchTerm = searchTerm.split(" ").join("-");
    var apiKey = "AIzaSyAH_XNq1-MK1My5OziQ3WIbWCh4WQPxPV8";
    var endPoint = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

    // change classes to display correct div
    myBookEl.setAttribute("class", "hide");
    bookMonthEl.setAttribute("class", "hide");
    resultEl.removeAttribute("class");

    // console.log(endPoint);
    // part of the async await to configue promise chain
    const response = await fetch(endPoint);

    if (!response.ok) {
        throw new Error("something went wrong");
    }

    const { items } = await response.json();
    console.log(items);

    // for each item in array create a card to display content
    items.forEach(function (item) {
        var title = item.volumeInfo.title;
        var image = item.volumeInfo.imageLinks.thumbnail;

        var titleEl = document.createElement("h3");
        var imageEl = document.createElement("img");
        var card = document.createElement("div");

        var cardTitleEl = document.createElement("div");
        var cardImgEl = document.createElement("div");

        var currentRead = document.createElement("button");
        var toRead = document.createElement("button");
        var read = document.createElement("button");

        card.setAttribute("class", "card");
        cardTitleEl.setAttribute("class", "card-content");
        cardImgEl.setAttribute("class", "card-image");

        // add buttons to the card for currently reading
        currentRead.setAttribute("class", "button");
        currentRead.addEventListener("click", addtoCurrentRead);
        currentRead.textContent = "Currently Reading";

        // add buttons to the card for to read
        toRead.setAttribute("class", "button");
        toRead.addEventListener("click", addToRead);
        toRead.textContent = "To Read";

        // add buttons to the card for read
        read.setAttribute("class", "button");
        read.addEventListener("click", addRead);
        read.textContent = "Read Book";

        titleEl.textContent = title;
        imageEl.setAttribute("src", image);

        // append to elements and cards
        cardTitleEl.appendChild(titleEl);
        cardImgEl.appendChild(imageEl);

        card.appendChild(cardImgEl);
        card.appendChild(cardTitleEl);

        card.appendChild(currentRead);
        card.appendChild(toRead);
        card.appendChild(read);

        currentRead.info = {
            title,
            image,
        };

        resultEl.appendChild(card);
    });
};

// functions to save to local storage
function addtoCurrentRead(event) {
    console.log(event.currentTarget.info);
    var volume1 = event.currentTarget.info;
    console.log(volume1);
    // console.log(JSON.stringify(volume));
    localStorage.setItem("volume1", JSON.stringify(volume1));
    localStorage.getItem("volume1");
};

function addToRead(event) {
    var volume2 = event.currentTarget.info;
    localStorage.setItem("volume2", JSON.stringify(volume2));
    localStorage.getItem("volume2");
 };

function addRead(event) { 
    var volume3 = event.currentTarget.info;
    localStorage.setItem("volume3", JSON.stringify(volume3));
    localStorage.getItem("volume3");
};

// function to display information in local storage to divs on my book page

// function to display information in local storage to wishlist page

// function to clear each book container

// event listenters
searchBtn.addEventListener("click", displaySearch);
