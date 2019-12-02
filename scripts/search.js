let parameters = location.search.substring(1).split("&");
let temp = parameters[0].split("=");
let l = unescape(temp[1]);
let searchValue = '+';
let str = l.replace(searchValue, "-");

function createCardHTML(article) {
    const {
        title,
        urlToImage,
        description,
        url,
    } = article;
    return (`
        <div class="card">
            <div class="card-body">
            <a class="card-title" href=${url}>${title}</a>
            <h6 class="card-subtitle mb-2 text-muted">${description}</h6>
            <img class="card-image"style:max-height: 70%";>${urlToImage}</img>
            <div>
            </div>
        </div>
    `);
}

$(".removeDefaultSubmit").submit(function (e) {
    return false;
});

$("#searchBtn").click(async function () {
    $("#searchContainer").empty();

    const inputValue = $("#searchPageInput").val();
    const URL = `https://newsapi.org/v2/everything?q=${inputValue}&apiKey=${CONSTANTS.NEWS_API_KEY}`;
    const response = await fetch(URL);
    const myJson = await response.json();
    const {
        articles
    } = myJson;
    console.log(myJson);

    for (let i = 0; i < articles.length; i = i + 4) {

        let rowHTML = "<div class='row'>";
        rowHTML += (`<div class='column'>`);
        rowHTML += (createCardHTML(articles[i]));
        rowHTML += (`</div>`);

        if (articles[i + 1]) {
            rowHTML += (`<div class='column'>`)
            const cardHTML = createCardHTML(articles[i + 1]);
            rowHTML += (cardHTML);
            rowHTML += (`</div>`);
        }

        if (articles[i + 2]) {
            rowHTML += (`<div class='column'>`)
            const cardHTML = createCardHTML(articles[i + 2]);
            rowHTML += (cardHTML);
            rowHTML += (`</div>`);
        }

        rowHTML += ('</div>');
        $("#searchContainer").append(rowHTML);
    }
});