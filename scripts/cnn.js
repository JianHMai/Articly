var app = document.getElementById('root');

var request = new XMLHttpRequest();
request.open('GET', 'https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=8e968903a7034e199d7fa5a223ccefd4', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  var articleList = data.articles;

  articleList.forEach(article => {

    var articleTitle = document.createElement('h1')
    articleTitle.textContent = article.title;

    var articleDate = document.createElement('p')
    articleDate.textContent = article.publishedAt;

    var articleDescription = document.createElement('p')
    articleDescription.textContent = article.description;

    var articleURL = document.createElement('a');
    articleURL.textContent = 'Link to Article';
    articleURL.href = article.url;

    var articleImage = document.createElement('img');
    articleImage.src = article.urlToImage;

    app.appendChild(articleTitle);
    app.appendChild(articleDate);
    app.appendChild(articleImage);
    app.appendChild(articleDescription);
    app.appendChild(articleURL);

    });
  } 

request.send();