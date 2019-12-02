var searchQuery = new URLSearchParams(window.location.search).get('search');

function createCardHTML(article) {
    const {
        title,
        content,
        description,
        urlToImage
    } = article;
    return (`
        <div class="card" style="width: 100%;">
          <img src=${urlToImage} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${title}</h5>
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

const searchNewsApi = async function () {
    $("#searchContainer").empty();

    let inputValue = $("#searchPageInput").val();
    if (!inputValue) {
        inputValue = searchQuery;
    }
    const URL = `https://newsapi.org/v2/everything?q=${inputValue}&apiKey=${CONSTANTS.NEWS_API_KEY}`;
    const response = await fetch(URL);
    const myJson = await response.json();
    const {
        articles
    } = myJson;
    console.log(myJson);

    for (let i = 0; i < articles.length; i = i + 3) {

        let rowHTML = "<div class='row'>";
        rowHTML += (`<div class='col'>`);
        rowHTML += (createCardHTML(articles[i]));
        rowHTML += (`</div>`);

        if (articles[i + 1]) {
            rowHTML += (`<div class='col'>`)
            const cardHTML = createCardHTML(articles[i + 1]);
            rowHTML += (cardHTML);
            rowHTML += (`</div>`);
        }

        if (articles[i + 2]) {
            rowHTML += (`<div class='col'>`)
            const cardHTML = createCardHTML(articles[i + 2]);
            rowHTML += (cardHTML);
            rowHTML += (`</div>`);
        }

        rowHTML += ('</div>');
        $("#searchContainer").append(rowHTML);
    }
};

$("#searchBtn").click(searchNewsApi);

if (searchQuery) {
    searchNewsApi();
}
