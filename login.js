function login() {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "admin@mineshield.com" && password === "admin123") {

        localStorage.setItem("username", "Mine Admin");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Email or Password");

    }

}