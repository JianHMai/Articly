const registerForm = document.querySelector("#registerForm");
registerForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    // get user info
    const email = registerForm["inputEmail"].value;
    const password = registerForm["inputPassword"].value;
    const passwordConfirm= registerForm["inputPasswordConfirm"].value;

    let correctPassword;
    let emailCorrect;

    if(password.length!==passwordConfirm.length){
        alert("Password Mismatch");
        correctPassword=false;
    }
    else if(password.length<6){
        alert("Password length must be 6 or greater");
        correctPassword=false;
    }

    for(let i = 0; i<email.length; i++){
        if(email.charAt(i)==='@'){
            if(email.charAt(i)==='.'){
                emailCorrect=true;
                break;
            }
        }
    }
    if(emailCorrect===false){
        alert("Invalid Email");
    }

    for(let i=0; i<password.length; i++){
        if(password.charAt(i)!==passwordConfirm.charAt(i)){
            alert("Password Mismatch");
            correctPassword=false;
            break;
        }
    }

    if(correctPassword && emailCorrect){
    // sign up user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        alert(cred);
    })}})