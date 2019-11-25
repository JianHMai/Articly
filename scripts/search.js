let parameters = location.search.substring(1).split("&");
let temp = parameters[0].split("=");
let l = unescape(temp[1]);
let searchValue = '+';
let str = l.replace(searchValue, "-");

function createCardHTML(article) {
    const {
        title,
        content,
        description
    } = article;
    return (`
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${description}</h6>
            <p class="card-text">${content}</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
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

    for (let i = 0; i < articles.length; i = i + 3) {

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