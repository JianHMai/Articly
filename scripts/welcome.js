$(document).ready(function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            $(".welcome").append("<h1 align='center'> Welcome " + user.email + "</h1>");
        } else {
            alert("You are not logged in");
            window.location.replace("login.html");
        }
    });
});
