let id= document.querySelector('#userid');
let pw= document.querySelector('#userpw');
let pwmore = document.querySelector('#userpwmore');
let tel = document.querySelector('#usertel');
let email = document.querySelector('#useremail');
let join = document.querySelector('#joinbutton');
let cancle = document.querySelector('#canclebutton');

let failmsg = document.querySelector('.failure-message');
let sucmsg = document.querySelector('.success-message');
let mismatmsg = document.querySelector('.mismatch-message');
let matmsg = document.querySelector('.match-message');
let misnummsg = document.querySelector('.misnumber-message');
let misemailmsg = document.querySelector('.misemail-message');


join.disabled=true;

let idvalue=false;
let pwvalue=false;
let telvalue=false;
let emailvalue=false;

id.addEventListener("keyup", (e) => {
    let a=/^[a-zA-Z0-9]*$/;
    if ( (id.value).length>=4 && (id.value).match(a)) {
        sucmsg.classList.remove('hide');
        failmsg.classList.add('hide');
        idvalue=true;
    }
    else {
        sucmsg.classList.add('hide');
        failmsg.classList.remove('hide');
        idvalue=false;
    }
    btnon();
});


pwmore.addEventListener("keyup", (e)=>{
    if (pw.value === pwmore.value) {
        mismatmsg.classList.add('hide');
        matmsg.classList.remove('hide');
       pwvalue=true;
    }
    else {
        mismatmsg.classList.remove('hide');
        matmsg.classList.add('hide');
        pwvalue=false;
    }
    btnon();
});



tel.addEventListener("keyup", (e)=>{
    let b=/^[0-9]*$/;
    if ((tel.value).match(b)) {
        misnummsg.classList.add('hide');
        telvalue=true;
    }
    else {
        misnummsg.classList.remove('hide');
        telvalue=false;
    }
    btnon();
});



email.addEventListener("keyup",(e)=>{
    let c= /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if((email.value).match(c)){
        misemailmsg.classList.add('hide');
        emailvalue=true;
    }else{
        misemailmsg.classList.remove('hide');
        emailvalue=false;
    }
    btnon();
});



function btnon(){
        
    if((idvalue && pwvalue && telvalue && emailvalue)==true){
        join.disabled=false;
    }else{
        join.disabled=true;
    }
}




function submitNew(){
    let newId=id.value;
    let newPw=pw.value;
    let newTel=tel.value;
    let newEmail=email.value;
    localStorage.setItem(newId,newPw,newTel, newEmail);
}



function init(){
    join.addEventListener("click",submitNew);
}


    
init();





