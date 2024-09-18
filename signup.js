if(localStorage.getItem("user")){
  window.location.href = "homepage.html";
};

// username
let username = document.getElementById("username");
let Vusername = document.getElementById("Vusername");
let inusername = document.getElementById("inusername");

username.onkeyup = () => {
  if (username.value.match(/\w{5,}[^0-9][^+!@#$%&*-+/]/ig)){
    Vusername.classList.add("d-none");
    inusername.classList.remove("d-none");
  } else {
    Vusername.classList.remove("d-none");
    inusername.classList.add("d-none");
  }
  if (username.value === "") {
    Vusername.classList.add("d-none");
    inusername.classList.add("d-none");
  }
};

// phonenumber
let phonenumber = document.getElementById("phonenumber");
let vphone = document.getElementById("vphone");
let inphone = document.getElementById("inphone");

phonenumber.onkeyup = () => {
  if (phonenumber.value.match(/\d{10,}/ig)) {
    vphone.classList.remove("d-none");
    inphone.classList.add("d-none");
  } else {
    vphone.classList.add("d-none");
    inphone.classList.remove("d-none");
  }
  if (phonenumber.value === "") {
    vphone.classList.add("d-none");
    inphone.classList.add("d-none");
  }
};

// gmail
let gmail = document.getElementById("gmail");
let ingmail = document.getElementById("ingmail");
let vgmail = document.getElementById("vgmail");

gmail.onkeyup = () => {
  if (gmail.value.match(/\w+(@(gmail|email).com)\b/gi)) {
    vgmail.classList.remove("d-none");
    ingmail.classList.add("d-none");
  } else {
    vgmail.classList.add("d-none");
    ingmail.classList.remove("d-none");
  }
  if (gmail.value === "") {
    vgmail.classList.add("d-none");
    ingmail.classList.add("d-none");
  }
};

// password
let Password = document.getElementById("Password");
let ipassword = document.getElementById("ipassword");
let vpassword = document.getElementById("vpassword");

Password.onkeyup = () => {
  if (Password.value.match(/\w{9,}/gi)) {
    ipassword.classList.add("d-none");
    vpassword.classList.remove("d-none");
  } else {
    ipassword.classList.remove("d-none");
    vpassword.classList.add("d-none");
  }
  if (Password.value === "") {
    ipassword.classList.add("d-none");
    vpassword.classList.add("d-none");
  }
};

// confirm password

let conPassword = document.getElementById("conPassword");
let iconfirm = document.getElementById("iconfirm");
let vconfirm = document.getElementById("vconfirm");

conPassword.onkeyup = () => {
  if (conPassword.value === Password.value) {
    vconfirm.classList.remove("d-none");
    iconfirm.classList.add("d-none");
  } else {
    vconfirm.classList.add("d-none");
    iconfirm.classList.remove("d-none");
  }
  if (conPassword.value === "") {
    vconfirm.classList.add("d-none");
    iconfirm.classList.add("d-none");
  }
};

// ------------------

const datapro = JSON.parse(localStorage.getItem("acc")) || [];

// let datapro;
// if (localStorage.getItem("acc") != null) {
//   datapro = JSON.parse(localStorage.getItem("acc"));
// } else {
//   datapro = [];
// }

// localStorage.clear()
let Confirmbtn = (document.getElementById("Confirmbtn").onclick = () => {
  let newpro = {
    username: username.value,
    phonenumber: phonenumber.value,
    gmail: gmail.value,
    Password: Password.value,
    conPassword: conPassword.value,
  };
  if (
    username.value != "" &&
    phonenumber.value != "" &&
    gmail.value != "" &&
    Password.value != "" &&
    conPassword.value != ""
  ) {
      datapro.push(newpro);
      localStorage.setItem("acc", JSON.stringify(datapro));
      window.location.href = "login.html";
  }
  // ------empty inputs
  if (username.value === "") {
    username.focus();
    Vusername.classList.remove("d-none");
    inusername.classList.add("d-none");
  }
  if (phonenumber.value === "") {
    phonenumber.focus();
    vphone.classList.add("d-none");
    inphone.classList.remove("d-none");
  }
  if (gmail.value === "") {
    gmail.focus();
    vgmail.classList.add("d-none");
    ingmail.classList.remove("d-none");
  }
  if (Password.value === "") {
    Password.focus();
    ipassword.classList.remove("d-none");
    vpassword.classList.add("d-none");
  }
  if (conPassword.value === "") {
    conPassword.focus();
    vconfirm.classList.add("d-none");
    iconfirm.classList.remove("d-none");
  }
  
});
// localStorage.clear()
