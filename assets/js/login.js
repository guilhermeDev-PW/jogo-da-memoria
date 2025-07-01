const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");

// Funçao para acionar o botao jogar
const validateInput = () => {
    if (input.value.length > 2) {
        button.removeAttribute("disabled");
        return;
    }
};

    button.setAttribute("disabled", "");

// Funçao para acionar o botao jogar
const handleSubmit = (event) => {

    event.preventDefault();

    localStorage.setItem("player", input.value);
    input.value = "";
    window.location.href = "pages/game.html";

};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);