const btnmode = document.getElementById("btn-mode");

btnmode.addEventListener("change", (e) => {

    document.body.classList.toggle("light", e.target.checked);

    var lightmode = document.getElementById("login-mode");
    lightmode.classList.toggle("login-mode-light"); 

    var lightModeBtn = document.getElementById("label");
    lightModeBtn.classList.toggle("btn-mode-light"); 
});
