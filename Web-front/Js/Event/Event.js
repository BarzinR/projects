const Div = document.getElementById("div");
const Text = document.getElementById("text");
const Button = document.getElementById('button');
Div.addEventListener('mousemove', RandomNumber);
Button.addEventListener('click', removeEvent);

function removeEvent() {
    Div.removeEventListener('mousemove', RandomNumber);
    document.getElementById("test").innerHTML = "Stoped";
}

function RandomNumber() {
    document.getElementById("test").innerHTML = Math.random();
}