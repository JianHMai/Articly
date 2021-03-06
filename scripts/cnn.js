let app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

let request = new XMLHttpRequest();
request.open('GET', 'https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=8e968903a7034e199d7fa5a223ccefd4', true);
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

        let save = document.createElement('button');
                save.className = "btn btn-info mx-auto d-block";
                save.textContent = "Bookmark";
                save.id = "saveArticle";
                save.onclick = function () {
                    firebase.auth().onAuthStateChanged(function (user) {
                        if (user) {
                            let db = firebase.firestore();
                            db.collection(user.uid).add({
                                title: article.title,
                                author: article.author,
                                source: article.source.name,
                                link: article.url,
                                imageURL: article.urlToImage
                            }).then(function () {
                                alert("Article saved");
                                location.reload();
                            })
                                .catch(function (error) {
                                    alert("Error adding document: ", error);
                                    location.reload();
                                });
                        } else {
                            alert("You must be logged in");
                    }
            });
        };

        let br = document.createElement('br');


        container.appendChild(card);

        card.appendChild(articleImage);
        card.appendChild(articleTitle);
        card.appendChild(articleDate);
        card.appendChild(articleDescription);
        card.appendChild(save);
        card.appendChild(br);

    });
};

request.send();