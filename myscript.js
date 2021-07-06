const loginForm = document.querySelector("form.login");
const signUpForm = document.querySelector("form.signUp");
const loginBtn = document.querySelector("label.login");
const signUpBtn = document.querySelector("label.signUp");
const loginTitle = document.querySelector(".heading .login");
const signUpTitle = document.querySelector(".heading .signUp");
const loginBckgrnd = document.getElementById("cont");
const back = document.getElementById("bod");
const tab = document.getElementById("tab");
const secSwitch = document.getElementById("secSwitch");
const ggle = document.getElementById("gle");

signUpBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginTitle.style.marginLeft = "-50%";
    back.style.background = '-webkit-linear-gradient(right,#f72585,#7209b7)';
    tab.style.background = '-webkit-linear-gradient(left,#f72585,#7209b7)';
    back.style.transition = 'background-color 3s'
});

loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginTitle.style.marginLeft = "0%";
    back.style.background = '-webkit-linear-gradient(left,#4361ee,#4cc9f0)';
    tab.style.background = '-webkit-linear-gradient(right,#4361ee,#4cc9f0)';
    back.style.transition = 'background-color 3s'
});

function verifyPass() {
    var password = document.getElementById('pass');
    var conpassword = document.getElementById('conpass');
    if (password != conpassword) {
        alert('Passwords do not match');
        return false;
    }
    return true;
}

secSwitch.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginTitle.style.marginLeft = "-50%";
    back.style.background = '-webkit-linear-gradient(right,#f72585,#7209b7)';
    tab.style.background = '-webkit-linear-gradient(left,#f72585,#7209b7)';
    back.style.transition = 'background-color 3s'
    document.getElementById("sign").checked = true;
});

ggle.onclick = (() => {
    window.location = 'https://www.google.com/';
})