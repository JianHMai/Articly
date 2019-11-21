const signout = document.querySelector('#signout');
signout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log("user signed out");
        alert("User signed out");
        window.location.href="index.html";
    })
});