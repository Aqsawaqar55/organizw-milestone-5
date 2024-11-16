// document.addEventListener("DOMContentLoaded", () => {
//     let hello = document?.getElementById('Name1') as HTMLInputElement;
//     console.log(hello);
    let resname:any = document.getElementById('Name1')
    let Designation: any = document.getElementById('Designation');
    let pic: any = document.getElementById('Profile_pic');
    let PIname: any = document.getElementById('PIname');
    let PIcontact: any = document.getElementById('PIcontact');
    let PIemail: any = document.getElementById('PIemail');
    let edu1: any = document.getElementById('edu1');
    let edu2: any = document.getElementById('edu2');
    let edu3: any = document.getElementById('edu3');
    let exp1: any = document.getElementById('exp1');
    let exp2: any = document.getElementById('exp2');
    let skill1: any = document.getElementById('skill1');
    let skill2: any = document.getElementById('skill2');
    let submitbtn = document.getElementById('submitbtn');
    console.log(submitbtn);

    let form = document.getElementById('form');
    form?.addEventListener('submit', (e) => {
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
                let textimg: any = reader.result;
                localStorage.setItem("picture", textimg);
                console.log(localStorage.getItem('picture'));
                
            });
            reader.readAsDataURL(pic.files[0]);
        }
        window.location.href = "static.html";
    });

    // console.log(document, "document");

