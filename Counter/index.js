const DEFAULT = 0;
let counter = DEFAULT;

/**
 * Attach to each button the corresponding function
 */
$('button').each(function(){
    let id = '#' + this.id;
    $(id).on('click', function(){
        if (id === '#btnDecr') {
            onDecreaseClicked();
        }
        else if (id === '#btnIncr') {
            onIncreaseClicked();
        }
        else {
            onResetClicked();
        }
    })
})

//****   Controllers  *****

/**
 * Actions taken when 'Decreased' Button is clicked
 */
function onDecreaseClicked() {
    decreaseCounter();
}

/**
 * Actions taken when 'Increase' Button is clicked
 */
function onIncreaseClicked() {
    increaseCounter();
}
/**
 * Actions taken when 'Reset' Button is clicked
 */
function onResetClicked() {
    resetCounter();
}


//   **** Model  ******

/**
 * Update the counter and sync the UI
 */
function decreaseCounter() {
    counter --;
    showCounter(counter);
}

/**
 * Update the counter and sync the UI
 */
function increaseCounter() {
    counter ++;
    showCounter(counter);
}

/**
 * Update the counter and sync the UI
 */
function resetCounter() {
    counter = DEFAULT;
    showCounter(counter);
}

/**
 * Assigns the counter to the correponding UI Element
 * styles accordingly
 * @param {Number|String} counter - updated counter value
 */
function showCounter(counter) {
    $('#counter').html(counter);
    styleCounter(counter);
}

/**
 * Assign color to the counter.
 * Green: Positive values
 * Red: Negative Values
 * Black: Zero
 * @param {Number} counter value
 */
function styleCounter(counter) {
    if (counter > 0) {
        $('#counter').css("color", "green");
    } else if (counter < 0) {
        $('#counter').css("color", "red");
    } else {
        $('#counter').css("color", "black");
    }
}
