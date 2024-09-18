if(localStorage.getItem("user")){
    window.location.href = "homepage.html";
};

let signup = document.getElementById("signup").onclick = ()=> {
    window.location.href = "signup.html"
};



// login button //gmail & password confirm
let login = document.getElementById("login");
let logingmail = document.getElementById("login-gmail");
let wrongG = document.getElementById("wrongG");
let valid = document.getElementById("valid");

let Password = document.getElementById("Password");
let wrongP = document.getElementById("wrongP");
let validetion = document.getElementById("validetion");
let empty = document.getElementById("empty");

const userdata = [];

// alinofal402@gmail.com
login.onclick = ()=> {
    if(logingmail.value.match(/\w+(@(gmail|email).com)\b/gi)){
        
// gmail local storage
        if(JSON.parse(localStorage.getItem("acc")).find((x)=> x.gmail === logingmail.value)&& logingmail.value != ""){
            valid.classList.remove("d-none");
            wrongG.classList.add("d-none");
            let localgmail = JSON.parse(localStorage.getItem("acc")).find((x)=> x.gmail === logingmail.value);
            let localstr = JSON.stringify(localgmail);
            

            if(Password.value.match(/\w{9,}/ig)){
                
                if(JSON.parse(localStorage.getItem("acc")).find((x)=> x.Password === Password.value)&& Password.value != ""){
                    validetion.classList.remove("d-none");
                    wrongP.classList.add("d-none");
                    userdata.push(localStorage.setItem("user",localstr));
                    window.location.href = "homepage.html";
                }else{
                    validetion.classList.add("d-none");
                    wrongP.classList.remove("d-none");
                }
            }else{
                console.log("invalid");
                validetion.classList.add("d-none");
                wrongP.classList.remove("d-none");
            };
        }else{
            console.log("invalid")
            let conG = confirm("You should Crat an account first !");
            if(conG){
            window.location.href = "signup.html";
        }
        }
    }else{
        valid.classList.add("d-none");
        wrongG.classList.remove("d-none");
    }
    if(logingmail.value === ""){
        valid.classList.add("d-none");
        wrongG.classList.remove("d-none");
    }
    if(Password.value === ""){
        validetion.classList.add("d-none");
        wrongP.classList.remove("d-none");
    }
};

logingmail.onkeyup = ()=> {
    valid.classList.add("d-none");
    wrongG.classList.add("d-none");
};
Password.onkeyup = ()=> {
    validetion.classList.add("d-none");
    wrongP.classList.add("d-none");
};

//alinofal405@gmail.com

// localStorage.removeItem("user")




