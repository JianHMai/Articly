let app = document.getElementById('root');
let request = new XMLHttpRequest();
request.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=8e968903a7034e199d7fa5a223ccefd4');
request.onload = function () {

    // Begin accessing JSON data here
    let data = JSON.parse(this.response);
    let articleList = data.articles;
    articleList.forEach(article => {
        if (article.source.name != 'Google News') {
            let articleSource = document.createElement('h1');
            articleSource.textContent = article.source.name;

            let articleAuthor = document.createElement('p');
            articleAuthor.textContent = article.author;

            let articleURL = document.createElement('a');
            articleURL.textContent = article.title;
            articleURL.href = article.url;

            let articleDescription = document.createElement('p');
            articleDescription.textContent = article.description;

            let articleImage = document.createElement('img');
            articleImage.src = article.urlToImage;

            app.appendChild(articleSource);
            app.appendChild(articleURL);
            app.appendChild(articleAuthor);
            app.appendChild(articleDescription);
            app.appendChild(articleImage);
        }
    });
};
request.send();