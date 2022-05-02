function login(){
    var user = document.getElementById("user").value ;
    var pass = document.getElementById("pass").value;
    if (user == "jahnavi" && pass == "030502"){
        window.location.href="jan3.html"
    }
    else{
        alert("login failed Try Again!")
    }
}