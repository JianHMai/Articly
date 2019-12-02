cardContainer = document.getElementById("card-container");
let request = new XMLHttpRequest();
request.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=8e968903a7034e199d7fa5a223ccefd4');
request.onload = function () {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response);
    let articleList = data.articles;
    let startingPoint = 0;

    let container = document.createElement('div');
    container.className = "container-responsive";

    let row = document.createElement('div');
    row.className = "row";
    articleList.forEach(article => {
            if (startingPoint > 2) {
                let column = document.createElement('div');
                column.className = "col-lg-4";

                let card = document.createElement('div');
                card.className = "card h-100 card-body";
                card.setAttribute('class', 'card');

                let articleImage = document.createElement('img');
                if(article.urlToImage === null || article.urlToImage === "null"){
                    articleImage.src = "images/noImage.png"
                }
                else articleImage.src = article.urlToImage;
                articleImage.className = "card-img-top img-fluid";
                articleImage.style = "width: 40vw; height: 20vw;";

                let cardBody = document.createElement('div');
                cardBody.className = 'card-block';

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

                cardBody.appendChild(articleTitle);
                cardBody.appendChild(articleAuthor);
                cardBody.appendChild(articleDescription);
                cardBody.appendChild(save);
                cardBody.appendChild(br);
                card.appendChild(articleImage);
                card.appendChild(cardBody);
                column.appendChild(card);
                row.appendChild(column);
            } else startingPoint++;
        }
    );
    container.appendChild(row);
    cardContainer.appendChild(container);
};
request.send();