document.getElementById("signOutButton").addEventListener("click");

firebase.auth().signOut().then(function() {
    location.reload();
}).catch(function(error) {
    alert(error);
});
