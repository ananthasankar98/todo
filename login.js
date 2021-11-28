let emial = document.getElementById("username");
let password = document.getElementByI("password");

function validate(){
    if (username.value!="admin"||password.value!="12345"){
        alert("Username or Password is Wrong!");
        return false;
    }
    else{
        return true;
        //alert("Validation is proper");
    }
}
