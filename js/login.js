'use strict';

var insertIntoSignup = require('script');

console.log(insertIntoSignup);

var userNameSignUp;
var emailSignUp;
var passWordSignUp;

function signUp(){
    userNameSignUp = document.getElementById('usernamesignup').value;
    emailSignUp = document.getElementById('emailsignup').value;
    passWordSignUp = document.getElementById('passwordsignup').value;

    if (passWordSignUp !== document.getElementById('passwordsignup_confirm').value){
        alert("Password do not match, Try again");
    }
    insertIntoSignup();

}