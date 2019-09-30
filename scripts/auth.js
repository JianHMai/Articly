const registerForm = document.querySelector("#registerForm");
registerForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    // get user info
    const email = registerForm["inputEmail"].value;
    const password = registerForm["inputPassword"].value;

    // sign up user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
    })
})
