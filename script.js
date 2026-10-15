let themebtn = document.getElementById("themeBtn");
let themeicon = document.getElementById("themeIcon");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let lenghtValue = document.getElementById("length-value");
let value = 16;

themebtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeicon.textContent = "☀️";
    }
    else {
        themeicon.textContent = "🌙";
    }

});

increase.addEventListener("click", function () {
        value++;
        lenghtValue.textContent = value;
});

decrease.addEventListener("click", function () {
        value--;
        lenghtValue.textContent = value;
});



const password = document.getElementById("password");
const copy = document.getElementById("copyBtn");
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789";
const symbol = "!#@$%^&*_/";
const upperid = document.getElementById("upper");
const lowerid = document.getElementById("lower");
const numberid = document.getElementById("number");
const symbolid = document.getElementById("symbol");


copy.addEventListener("click", function () {
    if (password.value === "") {
        alert("Generate a password first !");
    }
    else {
        password.select();
        password.setSelectionRange(0, password.value.length);

        let copied = document.execCommand("copy");
        if (copied) {
            alert("Copied !");
        }
        else {
            alert("Copy failed !");
        }
    }
});

function generated() {
    let characters = "";
    let result = "";

    if (upperid.checked) {
        characters += upper;
    }
    if (lowerid.checked) {
        characters += lower;
    }
    if (numberid.checked) {
        characters += number;
    }
    if (symbolid.checked) {
        characters += symbol;
    }

    if (characters === "") {
        alert("Atleast Choose one option !");
        return;
    }

    let i;

    for (i = 0; i < Number(value); i++) {
        let random = Math.floor(Math.random() * characters.length);
        result += characters[random];
    }

    password.value = result;
}

document.getElementById("generate").addEventListener("click", generated);











