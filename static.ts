let myName=  localStorage.getItem("name")
window.addEventListener('load',()=>{

 
let Designation=localStorage.getItem("Designation")
let picture = localStorage.getItem("picture")

let PIname= localStorage.getItem("PIname")
let PIcontact=localStorage.getItem("PIcontact")
let PIemail=localStorage.getItem("PIemail")
let edu1=localStorage.getItem("edu1")
let edu2=localStorage.getItem("edu2")
let edu3=localStorage.getItem("edu3")
let exp1=localStorage.getItem("exp1")
let exp2=localStorage.getItem("exp2")
let skill1=localStorage.getItem("skill1")
let skill2=localStorage.getItem("skill2")

let resName:any =document.getElementById('resName')
resName.textContent =myName

let desig :any=document.getElementById('desig')
desig.textContent = Designation
let pname :any =document.getElementById('pname')
  pname.textContent = PIname
  let Contact:any=document.getElementById('Contact')
  Contact.textContent = PIcontact
  let Email:any  =document.getElementById('Email')
 Email.textContent= PIemail
 let ed1 :any = document.getElementById('ed1')
 ed1.textContent=edu1
 let ed2 :any =document.getElementById('ed2')
 ed2.textContent = edu2
 let ed3:any =document.getElementById('ed3')
 ed3.textContent = edu3
 let exp :any =document.getElementById('exp1')
 exp.textContent=exp1
let expr :any =document.getElementById('exp2')
expr.textContent =exp2
let skil1 :any =document.getElementById('skil1')
skil1.textContent =skill1
let skil2  :any =document.getElementById('skil2')
skil2.textContent =skill2
let image :any=document.getElementById('image')
image.src= picture
})
let Personalbtn:any =document.getElementById('Personalbtn')
// let edubtn:any=document.getElementById('edubtn')
// let expbtn:any=document.getElementById('expbtn')
// let editbtn :any=document.getElementById('editbtn')

let perleg :any=document.getElementById('perleg')
let edu :any=document.getElementById('edu')
let exp:any=document.getElementById('exp')
// let skill :any=document.getElementById('skill')

Personalbtn.addEventListener('click', ()=>{
    if( perleg.style.display ==  'block'){
  perleg.style.display=  'none'}
  else{perleg.style.display=  'block'}
})


let Print = document.getElementById('print')
Print?.addEventListener('click',()=>{
  window.print()
})
let edit = document.getElementById('editbtn')
edit?.addEventListener('click',()=>{
  window.history.back()//page history create recent history main lay jahy ga.
})
let shareBtn=document.getElementById("sharebtn");

let anc:any = document.getElementById('anc');

let userName;

if(myName){
  userName =  myName.toLowerCase().replace(/\s+/g, '-') ;
}
else{
userName = "user";
}

let baseUrl ="http://127.0.0.1:5500/static.html";

let uniqueUrl = `${baseUrl}?/${userName}`;

shareBtn?.addEventListener("click", () => {
    anc.setAttribute("href", uniqueUrl); // set href = uniqueUrl;
    anc.click();
});

// copy button

let copyLinkBtn:any = document.getElementById("copybtn");
copyLinkBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(uniqueUrl).then(() => {
        alert("Link copied to clipboard");
    })


// let sharebtn = document.getElementById('sharebtn')
// let anc:any = document.getElementById('anc')
// let userName ;
// if(myName){
// userName=  myName.toLowerCase().replace(/\s+/g , "-")//rigix //replace krwaya hai+g globally /\remove space
// } else{
//   userName = "user"
// }
// let baseUrl = "http://127.0.0.1:5500/static.html"
// let uniqueUrl = `${baseUrl}?/${myName}`


// sharebtn?.addEventListener('click',()=>{
// anc.setAttribute("href", uniqueUrl)
// anc.click();

// });

// let copybtn = document.getElementById('copybtn')
// copybtn?.addEventListener("click",()=>{
//   navigator.clipboard.writeText(uniqueUrl).then(()=>{
//     alert("copy sucessful")
//   })

})
