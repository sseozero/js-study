let mode="white";

function sub(){
    if(mode=="white"){
        document.getElementsByTagName("body")[0].style.backgroundColor="black";
        mode="black";
    }
    else{
        document.getElementsByTagName("body")[0].style.backgroundColor="white";
        mode="white";
    }
}