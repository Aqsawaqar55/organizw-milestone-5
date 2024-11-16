"use strict";
// document.addEventListener("DOMContentLoaded", () => {
//     let hello = document?.getElementById('Name1') as HTMLInputElement;
//     console.log(hello);
let resname = document.getElementById('Name1');
let Designation = document.getElementById('Designation');
let pic = document.getElementById('Profile_pic');
let PIname = document.getElementById('PIname');
let PIcontact = document.getElementById('PIcontact');
let PIemail = document.getElementById('PIemail');
let edu1 = document.getElementById('edu1');
let edu2 = document.getElementById('edu2');
let edu3 = document.getElementById('edu3');
let exp1 = document.getElementById('exp1');
let exp2 = document.getElementById('exp2');
let skill1 = document.getElementById('skill1');
let skill2 = document.getElementById('skill2');
let submitbtn = document.getElementById('submitbtn');
console.log(submitbtn);
let form = document.getElementById('form');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem("name", resname.value);
    localStorage.setItem("Designation", Designation.value);
    localStorage.setItem("PIname", PIname.value);
    localStorage.setItem("PIcontact", PIcontact.value);
    localStorage.setItem("PIemail", PIemail.value);
    localStorage.setItem("edu1", edu1.value);
    localStorage.setItem("edu2", edu2.value);
    localStorage.setItem("edu3", edu3.value);
    localStorage.setItem("exp1", exp1.value);
    localStorage.setItem("exp2", exp2.value);
    localStorage.setItem("skill1", skill1.value);
    localStorage.setItem("skill2", skill2.value);
    if (pic.files && pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textimg = reader.result;
            localStorage.setItem("picture", textimg);
            console.log(localStorage.getItem('picture'));
        });
        reader.readAsDataURL(pic.files[0]);
    }
    window.location.href = "static.html";
});
// console.log(document, "document");
