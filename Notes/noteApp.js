let noteNo = 0;

//When document ready add listener
$(document).ready(function(){
    $('#addNoteButton').on('click', addNote);
})

// Access Date and Time 
$('#current-date').html(getCurrentDate());

//Constantly be updating the time
$('#current-time').html(getCurrentTime());
setInterval(()=> {
    $('#current-time').html(getCurrentTime());
},1000)


/**
 * Access current input, 
 * create a note with it
 */
function addNote() {
    
    //Ensure there is an input before proceed
    if ($('#noteInput').val() === ""){
        return;
    }

    //Construct Note Body
    const $newNote = $('<div>');// <- Note container
    let $deleteBtn = $('<button>');// <- Delete Button

    //input type checkbox
    const $checkbox = $('<input>');
    $checkbox.attr("type", "checkbox");
    $checkbox.attr("id", noteNo);

    //Label for checkbox
    const $checkboxLabel = $('<label>'); 
    $checkboxLabel.attr('for', noteNo);
    noteNo++;

    $checkbox.on('change', function(){
        $checkboxLabel.toggleClass("lineThrough");
    })

    //Input current note to the label
    const $noteContent = $('#noteInput').val();
    $checkboxLabel.text($noteContent);

    $newNote.addClass('note');


    //Make remove button functional
    $deleteBtn.on('click', function() {
        $newNote.detach();
    })

    //Append all to note container
    $newNote.append($checkbox);
    $newNote.append($checkboxLabel);
    $newNote.append($deleteBtn);

    //Add note to the note area
    $('#noteArea').append($newNote);
    //Reset text input
    $('#noteInput').val("");
}


/**
 * Create a string with the current date
 * @returns Current Date in a string format
 */
function getCurrentDate() {
    
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"];
    let currentDate = new Date();

    //Store current Date
    let year = currentDate.getFullYear();
    let month = months[currentDate.getMonth()];
    let date = currentDate.getDate();
    let day = days[currentDate.getDay()];

    return `${day}, ${date} ${month} ${year}`;
}

/**
 * Access current time
 * @returns a string with the current hour minute seconds
 */
function getCurrentTime() {
    let currentDate = new Date();

    //Store Current Time
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let second = currentDate.getSeconds();

    //Ensure consistent Digits
    if (second < 10) {second = "0" + second}
    if (hour < 10) {hour = "0" + hour}
    if (minute < 10) {minute = "0" + minute}

    return `${hour}:${minute}:${second}`;
}
