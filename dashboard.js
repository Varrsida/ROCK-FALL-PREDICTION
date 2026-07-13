const username = localStorage.getItem("username");

if(username){

    document.getElementById("welcome").innerHTML =
    "Welcome, " + username;

}else{

    window.location.href = "login.html";

}

function logout(){

    localStorage.clear();

    window.location.href = "login.html";

}
