

const loginForm = document.querySelector("#loginForm");4
const username = document.querySelector("#username");
const password = document.querySelector("#password")


loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if(password == "" || username == "") return;
    const data = JSON.stringify({
        username,password
    });
    localStorage.setItem("auth", data);

    window.location.href = "/home.html";
})
