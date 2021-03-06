//global variables
var searchBtn = document.querySelector("#search-btn");
var clearBtn = document.querySelector("#clear-btn");
var resultEl = document.querySelector("#search-results");
var myBookEl = document.querySelector("#my-book-container");
var bookMonthEl = document.querySelector("#book-of-the-month");
var currentReadEl = document.querySelector(".currently-reading");
var toReadEl = document.querySelector(".to-read-list");
var readEl = document.querySelector(".read-list");
var wishListEl = document.querySelector("#wishlist-container");
var bestsellersEl = document.getElementById("best-sellers-list");
var reviewsEl = document.getElementById("reviews-list");
var reviewsFormEl = document.getElementById("reviews-form");
var reviewsBtnEl = document.getElementById("reviews-btn");
var reviewsInput = document.getElementById("reviews-search");
var NYTAPIKEY = "?api-key=TlaGcjpp9UjO8xLJiOFSmOKXPOu4M2Go";


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
        var wishList = document.createElement("button");

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

        // add buttons to the card for wish list
        wishList.setAttribute("class", "button");
        wishList.addEventListener("click", addtoWishList);
        wishList.textContent = "Wish List";

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
        card.appendChild(wishList);

        currentRead.info = {
            title,
            image,
        };

        toRead.info = {
            title,
            image,
        };

        read.info = {
            title,
            image,
        };

        wishList.info = {
            title,
            image,
        }

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
};

function addToRead(event) {
    console.log(event.currentTarget.info);
    var volume2 = event.currentTarget.info;
    localStorage.setItem("volume2", JSON.stringify(volume2));
};

function addRead(event) { 
    console.log(event.currentTarget.info);
    var volume3 = event.currentTarget.info;
    localStorage.setItem("volume3", JSON.stringify(volume3));
};

function addtoWishList(event) {
    console.log(event.currentTarget.info);
    var volume4 = event.currentTarget.info;
    localStorage.setItem("volume4", JSON.stringify(volume4));
};

// function to display information in local storage to currently reading
window.addEventListener('load',
    function () {
        var volume1data = JSON.parse(localStorage.getItem("volume1"));

        var title = volume1data.title;
        var image = volume1data.image;

        var titleEl = document.createElement("h3");
        var imageEl = document.createElement("img");
        var card = document.createElement("div");

        var cardTitleEl = document.createElement("div");
        var cardImgEl = document.createElement("div");

        card.setAttribute("class", "card");
        cardTitleEl.setAttribute("class", "card-content");
        cardImgEl.setAttribute("class", "card-image");

        titleEl.textContent = title;
        imageEl.setAttribute("src", image);

        cardTitleEl.appendChild(titleEl);
        cardImgEl.appendChild(imageEl);

        card.appendChild(cardImgEl);
        card.appendChild(cardTitleEl);

        currentReadEl.appendChild(card);
    }
);

// function to display information in local storage to read
window.addEventListener('load',
    function () {
        var volume2data = JSON.parse(localStorage.getItem("volume2"));

        var title = volume2data.title;
        var image = volume2data.image;

        var titleEl = document.createElement("h3");
        var imageEl = document.createElement("img");
        var card = document.createElement("div");

        var cardTitleEl = document.createElement("div");
        var cardImgEl = document.createElement("div");

        card.setAttribute("class", "card");
        cardTitleEl.setAttribute("class", "card-content");
        cardImgEl.setAttribute("class", "card-image");

        titleEl.textContent = title;
        imageEl.setAttribute("src", image);

        cardTitleEl.appendChild(titleEl);
        cardImgEl.appendChild(imageEl);

        card.appendChild(cardImgEl);
        card.appendChild(cardTitleEl);

        toReadEl.appendChild(card);
    }
);

// function to display from local storage to "read" section
window.addEventListener('load',
    function () {
        var volume3data = JSON.parse(localStorage.getItem("volume3"));

        var title = volume3data.title;
        var image = volume3data.image;

        var titleEl = document.createElement("h3");
        var imageEl = document.createElement("img");
        var card = document.createElement("div");

        var cardTitleEl = document.createElement("div");
        var cardImgEl = document.createElement("div");

        card.setAttribute("class", "card");
        cardTitleEl.setAttribute("class", "card-content");
        cardImgEl.setAttribute("class", "card-image");

        titleEl.textContent = title;
        imageEl.setAttribute("src", image);

        cardTitleEl.appendChild(titleEl);
        cardImgEl.appendChild(imageEl);

        card.appendChild(cardImgEl);
        card.appendChild(cardTitleEl);

        readEl.appendChild(card);
    }
);

// wishlist storage display
window.addEventListener('load',
    function () {
        var volume4data = JSON.parse(localStorage.getItem("volume4"));

        var title = volume4data.title;
        var image = volume4data.image;

        var titleEl = document.createElement("h3");
        var imageEl = document.createElement("img");
        var card = document.createElement("div");

        var cardTitleEl = document.createElement("div");
        var cardImgEl = document.createElement("div");

        card.setAttribute("class", "card");
        cardTitleEl.setAttribute("class", "card-content");
        cardImgEl.setAttribute("class", "card-image");

        titleEl.textContent = title;
        imageEl.setAttribute("src", image);

        cardTitleEl.appendChild(titleEl);
        cardImgEl.appendChild(imageEl);

        card.appendChild(cardImgEl);
        card.appendChild(cardTitleEl);

        wishListEl.appendChild(card);


    }
);


var displayBestSellers = async function () {
    var NYTurl = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json${NYTAPIKEY}`;

    fetch(NYTurl)
        .then(response => response.json())
        .then((data) => {
            var bestsellersList = data.results
            for (let i = 0; i < 10; i++) {
                let booktitle = bestsellersList[i].title;
                let bookAuthor = bestsellersList[i].author;
                var listItem = document.createElement('li');
                listItem.textContent = `${booktitle} by ${bookAuthor}`;
                bestsellersEl.appendChild(listItem)
            } 
        });
};


var displayReviews =  async function (event) {
    event.preventDefault();

    var reviewSearch = reviewsInput.value.trim();
    console.log(reviewSearch)

    var reviewsURL = `https://api.nytimes.com/svc/books/v3/reviews.json${NYTAPIKEY}&title=${reviewSearch}`;
    
    fetch(reviewsURL)
        .then(response => response.json())
        .then((data) => {
           console.log(data.results);
           for (let i = 0; i < data.results.length; i++) {
                let booktitle = data.results[i].book_title;
                let bookAuthor = data.results[i].book_author;
                let bookURL = data.results[i].url;
                var listItem = document.createElement('li');
                listItem.textContent = `${booktitle} by ${bookAuthor} ${bookURL}`;
                reviewsEl.appendChild(listItem)
                
                var bookurlEl = document.createElement('a');
                bookurlEl.reviewsList = 'list-item flex-row justify-space-between align-center';
                bookurlEl.setAttribute('href', './index.html?url=');
            } 
        });
};


// call
displayBestSellers();


// function to clear each book container
clearBtn.addEventListener("click", function() {
    localStorage.clear();
    document.getElementsByClassName("storage-container").innerHTML="";
    window.location.reload();
});


// event listeners
searchBtn.addEventListener("click", displaySearch);
reviewsBtnEl.addEventListener('click', displayReviews)