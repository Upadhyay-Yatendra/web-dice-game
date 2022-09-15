
// creatinng an array of our images
image_array = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png",
];
// first random number

var n = Math.random();
n = n * 6;
var randomNumber1 = Math.floor(n);

function first_dice() {
    let selected_image = image_array[randomNumber1];

    document
        .querySelector(".img1")
        .setAttribute("src", "images/" + selected_image);
}

// second random number
var m = Math.random();
m = m * 6;
var randomNumber2 = Math.floor(m);

// DOING IT FOR SECOND IMAGE
function second_dice() {
    let selected_image2 = image_array[randomNumber2];
    document
        .querySelector(".img2")
        .setAttribute("src", "images/" + selected_image2);
}
function result() {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = " ✌️ Player 1 Wins 🎉";
        setTimeout(window.location.reload.bind(window.location), 2000);
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").textContent = " 🎉 Player 2 Wins ✌️";
        setTimeout(window.location.reload.bind(window.location), 2000);
    } else {
        document.querySelector("h1").textContent = "Draw !🥱";
        setTimeout(window.location.reload.bind(window.location), 2000);   
    }
}
