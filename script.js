function matchpassword(){
    var firstPass=document.f1.password.value;
    var secondPass=document.f1.password2.value;
    if(firstpass==secondPass){
        alert("your passward is correct");
        return true;
    }
    else{
        alert("passward must be same!");
        return false;
    }
}