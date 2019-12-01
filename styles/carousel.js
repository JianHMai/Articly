$(document).ready(function () {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=8e968903a7034e199d7fa5a223ccefd4');
    request.onload = function () {
        // Begin accessing JSON data here
        let data = JSON.parse(this.response);

        for (let i = 0; i < 3; i++) {
            $('<div class="carousel-item"><img class="img-fluid" src="' + data.articles[i].urlToImage + '" style= ' +
                '"width: 60vw; height: 30vw;"><div class="carousel-caption"><h5><a href=' + data.articles[i].url +
             'style="color:red">' + data.articles[i].title + '</a></h5><p>' + data.articles[i].author +'</p></div> </div>').appendTo('.carousel-inner');
            $('<li data-target="#carousel" data-slide-to="' + i + '"></li>').appendTo('.carousel-indicators');
        }
    $('.carousel-item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
    $('#carousel').carousel();
};
request.send();
});