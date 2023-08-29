$(document).ready(function(){
    $("#btn").on("click", changeBgColor);
})

let hexDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function changeBgColor() {
    let hexNum = getRandomHex();
    $("body").css("background-color", hexNum);
    $("#colorName").text(hexNum);
}

function getRandomHex() {
    let hexString = "#";

    for (i = 0; i < 6; i++) {
        hexString += hexDigits[getRandomInt(hexDigits.length)];
    }

    return hexString;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
