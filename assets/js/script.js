let searchInput = document.querySelector('#search-input');
let formatInput = document.querySelector('#format-input');
let searchButton = document.querySelector('.search-btn');

let requestBaseUrl = "https://www.loc.gov/" 

function getData(event) {
    event.preventDefault();
    let searchInputValue = searchInput.value;
    let formatInputValue = formatInput.value;
    let requestUrl = requestBaseUrl + formatInputValue + "?q=" + searchInputValue + "&fo=json"
    fetch(requestUrl)
        .then( function(response) {
        return response.json()
    })
    .then (function (data) {
        console.log(data)
    })
}



searchButton.addEventListener('click', getData);