if(! localStorage.getItem("user")){
    window.location.href = "login.html";
};

let arro = (document.getElementById("arro").onclick = () => {
  window.location.href = "homepage.html";
});

let info = JSON.parse(localStorage.getItem("user"));

// username
let username = info.username;
// gmail
let gmail = info.gmail;
// phone number
let phone = info.phonenumber;

// Log out
let Logout = (document.getElementById("Logout").onclick = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("countpro");
  window.location.href = "login.html";
});


// Edit Profile
// username
let namea = document.getElementById("namea"); 
namea.value = username;

// gmail
let gim = document.getElementById("gim");
gim.value = gmail;

// phone number
let telephone = document.getElementById("telephone");
telephone.value = phone;

// edit profile
let validU = document.getElementById("validU");
let wrongU = document.getElementById("wrongU");

let wrongG = document.getElementById("wrongG");
let validG = document.getElementById("validG");

let wrongphone = document.getElementById("wrongphone");
let validphone = document.getElementById("validphone");

let editprofile = document.getElementById("editprofile");
let Cancel = document.getElementById("Cancel");
let mood = "edit";
editprofile.onclick = ()=> {
  
  editprofile.innerHTML = "save";
  mood = "save";
  if(mood == "save"){
    editprofile.classList.add("disabled");
    Cancel.classList.remove("d-none");
    Cancel.onclick = ()=> location.reload();
    namea.focus();

    namea.onkeyup = () => {
      if (namea.value.match(/\w{5,}[^0-9][^+!@#$%&*-+/]/ig)){
        wrongU.classList.add("d-none");
        validU.classList.remove("d-none");
        editprofile.classList.remove("disabled");
      } else {
        wrongU.classList.remove("d-none");
        validU.classList.add("d-none");
        editprofile.classList.add("disabled");
      }
      if (namea.value == "") {
        wrongU.classList.add("d-none");
        validU.classList.add("d-none");
        editprofile.classList.add("disabled");
      }
    };
    gim.onkeyup = () => {
      if (gim.value.match(/\w+(@(gmail|email).com)\b/gi)) {
        validG.classList.remove("d-none");
        wrongG.classList.add("d-none");
        editprofile.classList.remove("disabled");
      } else {
        validG.classList.add("d-none");
        wrongG.classList.remove("d-none");
      editprofile.classList.add("disabled");
      }
      if (gim.value === "") {
        validG.classList.add("d-none");
        wrongG.classList.add("d-none");
      editprofile.classList.add("disabled");
      }
    };
    telephone.onkeyup = () => {
      if (telephone.value.match(/\d{10,}/ig)) {
        validphone.classList.remove("d-none");
        wrongphone.classList.add("d-none");
        editprofile.classList.remove("disabled");
      } else {
        validphone.classList.add("d-none");
        wrongphone.classList.remove("d-none");
        editprofile.classList.add("disabled");
      }
      if (telephone.value === "") {
        validphone.classList.add("d-none");
        wrongphone.classList.add("d-none");
        editprofile.classList.add("disabled");
      }
    };
    editprofile.onclick = ()=> {
      let confirmetion = confirm("are you sure you Want to change your profile info?");
      if(confirmetion == true){
        let newdata = {username: namea.value,gmail: gim.value,phonenumber: telephone.value};
        info = newdata;
      }
      localStorage.setItem("user",JSON.stringify(info));
      location.reload();
    }
    wrongU.classList.add("d-none");
    validU.classList.add("d-none");
    validG.classList.add("d-none");
    wrongG.classList.add("d-none"); 
    validphone.classList.add("d-none");
    wrongphone.classList.add("d-none");
  }else{
    mood = "edit";
    editprofile.innerHTML = "Edit profile";
  }
};

