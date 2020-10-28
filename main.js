const signupForm = document.querySelector('#signup-form');

const emailHelp = document.querySelector('#emailHelp')
signupForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;
    auth.createUserWithEmailAndPassword(email, password)
     .then(userCredential => {
         console.log("signup")
     }).catch(function(error){
            // Handle Errors here.
        var errorCode = error.code;
        // ...
        switch(errorCode){
            case "auth/email-already-in-use":
                {
                    emailHelp.innerHTML = "email repetido"
                    emailHelp.classList.toggle("error")

                }
            break
        }
     })
})
