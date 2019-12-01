let app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

let request = new XMLHttpRequest();
request.open('GET', 'https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=8e968903a7034e199d7fa5a223ccefd4', true);
request.onload = function () {

    // Begin accessing JSON data here
    let data = JSON.parse(this.response);
    let articleList = data.articles;

    articleList.forEach(article => {

        const card = document.createElement('div');
        card.setAttribute('class', "card");

        let articleTitle = document.createElement('h1');
        articleTitle.textContent = article.title;

        let articleDate = document.createElement('p');
        articleDate.textContent = article.publishedAt;

        let articleDescription = document.createElement('p');
        articleDescription.textContent = article.description;
        
        let articleImage = document.createElement('img');
        articleImage.src = article.urlToImage;

        let articleURL = document.createElement('a');
        articleURL.textContent = 'Link to Article';
        articleURL.href = article.url;

        container.appendChild(card);

        card.appendChild(articleTitle);
        card.appendChild(articleDate);
        card.appendChild(articleImage);
        card.appendChild(articleDescription);
        card.appendChild(articleURL);

    });
};

request.send();