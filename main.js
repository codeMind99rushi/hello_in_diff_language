let divi = document.getElementById('divi');
let heading = document.getElementById('heading');

btn1.addEventListener("click", Marathi);
btn2.addEventListener("click", Hindi);
btn3.addEventListener("click", Italian);
btn4.addEventListener("click", French); 

function Marathi() {
    heading.innerHTML = "Namaskar";
}

function Hindi() {
    heading.innerHTML = "Namaste";
}

function Italian() {
    heading.innerHTML = "Ciao";
}

function French() {
    heading.innerHTML = "Salut";
}
