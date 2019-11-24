cardContainer = document.getElementById("card-container");
let request = new XMLHttpRequest();
request.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=8e968903a7034e199d7fa5a223ccefd4');
request.onload = function () {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response);
    let articleList = data.articles;
    articleList.forEach(article => {
        let card = document.createElement('div');
        card.className = "card";
        card.style = "width:90rem;";

        let articleImage = document.createElement('img');
        articleImage.src = article.urlToImage;
        articleImage.className = 'card-img-top';

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let articleTitle = document.createElement('a');
        articleTitle.textContent = article.title;
        articleTitle.href = article.url;
        articleTitle.className = 'card-title';

        let articleAuthor = document.createElement('p');
        articleAuthor.innerText = article.author;
        articleAuthor.className = 'card-author';

        let articleDescription = document.createElement('p');
        articleDescription.innerText = article.description;
        articleDescription.className = 'card-text';

        cardBody.appendChild(articleTitle);
        cardBody.appendChild(articleAuthor);
        cardBody.appendChild(articleDescription);
        card.appendChild(articleImage);
        card.appendChild(cardBody);
        cardContainer.appendChild(card);

    });
};
request.send();



