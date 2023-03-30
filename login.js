let loginId=document.querySelector("#loginid");
let loginPw=document.querySelector("#loginpw");
let loginBtn=document.querySelector("#loginbutton");
let link=false;


function check(){
    let id=loginId.value;
    let pw=loginPw.value;
    if(localStorage.getItem(id) == pw){
        document.location.href="loginmain.html?id";
        alert(id+"님 반갑습니다");
    }else{
        alert("로그인 실패");
    }
}

function checkInit(){
    loginBtn.addEventListener("click", check);
}

checkInit();
