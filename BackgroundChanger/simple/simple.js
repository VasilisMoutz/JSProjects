$(document).ready(function(){
    $("#btn").on("click", changeBgColor);
})

let colors = ['White', 'Red', 'Green', 'Blue', 'Black'];
let temp = 0;
let rand;

function changeBgColor() {

    //Prevent showing the same color right after
    do {
        rand = getRandomInt(colors.length);
    } while (temp === rand);
    temp = rand;

    //get a random color from colors array
    let bgColor = colors[rand];

    //Apply Changes
    $('#colorName').text(bgColor);
    $("body").css("background-color", bgColor);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


