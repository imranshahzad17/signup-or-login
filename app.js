function signUp() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Email and password cannot be empty");
        return;
    }
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    location.href = "./wellcome.html";
}
function logIn() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email !== localStorage.getItem("email") || password !== localStorage.getItem("password")) {
        alert("Invalid email or password");
    } else {
        location.href = "./wellcome.html";
    }
}
function logout() {
    location.href = "./index.html";
}