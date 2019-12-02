let app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

let request = new XMLHttpRequest();
request.open('GET', 'https://newsapi.org/v2/top-headlines?sources=techradar&apiKey=8e968903a7034e199d7fa5a223ccefd4', true);
request.onload = function () {

  // Begin accessing JSON data here
  let data = JSON.parse(this.response);
  let articleList = data.articles;

  articleList.forEach(article => {

    const card = document.createElement('div');
    card.setAttribute('class', "card");

    let articleTitle = document.createElement('a');
    articleTitle.textContent = article.title;
    articleTitle.className = 'article-title';
    articleTitle.href = article.url;

    let articleDate = document.createElement('p');
    articleDate.textContent = article.publishedAt;
    articleDate.className = 'article-date';

    let articleDescription = document.createElement('p');
    articleDescription.textContent = article.description;
    articleDescription.className = 'article-description';
    
    let articleImage = document.createElement('img');
        articleImage.className = 'article-image'
        if((article.urlToImage != 'null') && (article.urlToImage !== null)){
            articleImage.src = article.urlToImage;
        }
        else articleImage.src = "images/noImage.png";

    container.appendChild(card);

    card.appendChild(articleTitle);
    card.appendChild(articleDate);
    card.appendChild(articleImage);
    card.appendChild(articleDescription);

});
};

request.send();