let app = document.getElementById('root');

let request = new XMLHttpRequest();
request.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=8e968903a7034e199d7fa5a223ccefd4', true);
request.onload = function () {

    // Begin accessing JSON data here
    let data = JSON.parse(this.response);
    let articleList = data.articles;

    articleList.forEach(article => {

        let articleTitle = document.createElement('h1');
        articleTitle.textContent = article.title;

        let articleDate = document.createElement('p');
        articleDate.textContent = article.publishedAt;

        let articleDescription = document.createElement('p');
        articleDescription.textContent = article.description;

        let articleURL = document.createElement('a');
        articleURL.textContent = 'Link to Article';
        articleURL.href = article.url;

        let articleImage = document.createElement('img');
        if(article.urlToImage === null){
            articleImage.src = "images/noImage.png"
        }
        else articleImage.src = article.urlToImage;

        app.appendChild(articleTitle);
        app.appendChild(articleDate);
        app.appendChild(articleImage);
        app.appendChild(articleDescription);
        app.appendChild(articleURL);

    });
};

request.send();