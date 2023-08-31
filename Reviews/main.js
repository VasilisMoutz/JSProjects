//App State
const reviews = [
    {
        id: 0,
        personaName: "Anna B.",
        job: "Web Designer",
        img: "https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg",
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat lectus nibh, nec elementum turpis porta ac. Pellentesque condimentum'
    },
    {
        id: 1,
        personaName: "John J. B.",
        job: "CEO at JK Facilities",
        img: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg",
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat lectus nibh, nec elementum turpis porta ac. Pellentesque condimentum'
    },    
    {
        id: 2,
        personaName: "Emily Smith",
        job: "Graphic Designer",
        img: "https://img.freepik.com/free-photo/adorable-woman-with-toothy-smile-white_1187-5165.jpg",
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat lectus nibh, nec elementum turpis porta ac. Pellentesque condimentum'
    },
    {
        id: 3,
        personaName: "Evelyn H. Anderson",
        job: "Software Developer",
        img: "https://img.freepik.com/free-photo/waist-up-shot-positive-attractive-young-european-woman-employee-student-wearing-red-lipstick-oval-glasses-smiling-confidently-keeping-arms-folded-posing-isolated_344912-548.jpg",
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat lectus nibh, nec elementum turpis porta ac. Pellentesque condimentum'
    }]

//Get an initial random persona
let personaId = Math.floor(Math.random() * reviews.length)

$(document).ready(function(){
    showPersonaById(personaId)

    document.querySelector('#prevBtn').addEventListener('click', function() {
        onPrevbtnClicked()
    })

    document.querySelector('#nextBtn').addEventListener('click', function() {
        onNextbtnClicked()
    })
})

function showPersonaById(personaId) {
    const persona = reviews.find(p => p.id === personaId)
    const { personaName, job, img: image, descr } = persona;
    $('#personaImg').css('background-image', `url(${image})`);
    $('#personaName').html(personaName);
    $('#personaProfession').html(job);
    $('#personaDescr').html(descr);
}

function onPrevbtnClicked() {
    showPrevPersona();
}

function onNextbtnClicked() {
    showNextPersona();
}

/**
 * Cirulary find previous in order persona based on id
 */
function showPrevPersona() {
    personaId = (personaId < 0) ? reviews.length - 1 : --personaId;
    showPersonaById(personaId);
}

/**
 * Cirulary find next in order persona based on id
 */
function showNextPersona() {
    personaId = (++personaId % reviews.length);
    showPersonaById(personaId);
}
