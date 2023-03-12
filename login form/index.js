const usernameInput =document.querySelector(".user-input");
const passwordInput =document.querySelector(".pass-input");
const usernameMsg =document.querySelector(".username-msg");
const passwordMsg =document.querySelector(".password-msg");
const signinBtn =document.querySelector(".signin-button");
const signinStatus =document.querySelector(".signin-status");

signinBtn.addEventListener("click" , signIn);

function signIn(event) {
    event.preventDefault();
    const userValue = usernameInput.value ;
    const passValue = passwordInput.value ;
    usernameMsg.innerHTML = "";
    passwordMsg.innerHTML = "";

    let ifSendData = true

    if(userValue.length === 0 || userValue.indexOf("@") === -1 || userValue.indexOf(".") === -1){
      usernameMsg.innerHTML = "please enter a valid email" ;
      ifSendData = false 
    }

    if(passValue.length === 0) {
        passwordMsg.innerHTML = "please enter a valid password";
        ifSendData = false
    } else if (passValue.length <= 4) {
        passwordMsg.innerHTML= "your password is too short";
        ifSendData = false
    }

    if(ifSendData) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
             username:userValue,
             password : passValue
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then(response => { 
                if(response.ok) { 
                signinStatus.innerHTML="You signed in successfully"
            }

            }
            
            )
    
    }
}

