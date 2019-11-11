const registerForm = document.querySelector("#registerForm");
registerForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    // get user info
    const email = registerForm["inputEmail"].value;
    const password = registerForm["inputPassword"].value;
    const passwordConfirm= registerForm["inputPasswordConfirm"].value;

    let correctPassword=true;
    let correctEmail=true;

    if(email.length===0){ // check if email field is empty
        alert("Email field empty");
        correctEmail=false;
    }

    if(password.length!==passwordConfirm.length){
        alert("Password mismatch");
        correctPassword=false;
    }
    else if(password.length<6){
        alert("Password length must be 6 or greater");
        correctPassword=false;
    }
    else if(password.length===0){
        alert("Password field empty");
        correctPassword=false;
    }
    else if(passwordConfirm.length===0){
        alert("Password confirmation field blank");
        correctPassword=false;
    }

    for(let i=0; i<password.length; i++){
        if(password.charAt(i)!==passwordConfirm.charAt(i)){
            alert("Password mismatch");
            correctPassword=false;
            break;
        }
    }

    if(correctPassword && correctEmail){
        // sign up user
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            console.log(cred.user);
            alert("Account created successfully");
            window.location.href="login.html";
        }).catch(function (error) {
            alert(error);
        })
    }
});

// sign out
const signout = document.querySelector('#signout');
signout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log("user signed out");
        alert("User signed out");
        window.location.href="index.html";
    })
})

// log in
const logInForm = document.querySelector("#logInForm");
logInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = logInForm['logInEmail'].value;
    const password = logInForm['logInPassword'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        alert("User signed in");
        window.location.href="index.html";
    })
})
