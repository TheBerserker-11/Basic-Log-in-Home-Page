function validateform(){
var name=document.myform.username.value
var pass=document.myform.password.value

if(name=="admin" && pass=="1234"){
    return true;
}

else if(name=="" && pass==""){
    alert("Please Enter Username and Password");
    return false;
} 
else if(name=="" && name==""){
    alert("Please Enter Username");
    return false;
}
else if(pass=="" && pass==""){
    alert("Please Enter Password");
    return false;
}
else{
    alert("Invalid Username and Password")
    var name=document.myform.username.value = '';
    var pass=document.myform.password.value = '';
    return false;
} 

}


