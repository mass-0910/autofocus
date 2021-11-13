window.scrollTo(0, 0)
let player = document.getElementsByClassName("PlayerContainer")[0];
let position = player.getBoundingClientRect();
let header = document.getElementById("CommonHeader")
window.scrollTo(0, position.top - window.innerHeight / 2 + position.height / 2 - header.getBoundingClientRect().height);