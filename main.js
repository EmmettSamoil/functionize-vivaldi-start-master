// Vivald JS Example

// When a Season Button is Clicked
document.getElementById('summerBtn').addEventListener('click', setSummer);
document.getElementById('autumnBtn').addEventListener('click', setAutumn);
document.getElementById('winterBtn').addEventListener('click', setWinter);
document.getElementById('springBtn').addEventListener('click', setSpring);

// Event Functions
function setSummer() {
    setAll('summer');
    
    // - change page background color
    document.body.style.backgroundColor = '#1BA848';
}

function setAutumn() {
    setAll('autumn');
   
    // - change page background color
    document.body.style.backgroundColor = '#FE6732';
}

function setWinter() {
    setAll('winter');

    // - change page background color
    document.body.style.backgroundColor = '#1C64B9';
}

function setSpring() {
   setAll('spring');

    // - change page background color
    document.body.style.backgroundColor = '#0E94D1';
}

function removeBtn() {
    document.getElementById('springBtn').classList.remove('activeBtn');
    document.getElementById('summerBtn').classList.remove('activeBtn');
    document.getElementById('autumnBtn').classList.remove('activeBtn');
    document.getElementById('winterBtn').classList.remove('activeBtn');
}

function setAll(s1) {
    // - Change concerto text
    document.getElementById('season-text').innerHTML = s1;
    // - change main image
    document.getElementById('main-img').src = 'images/' + s1 + '.jpg';
    // - change audio source
    document.getElementById('song').src = 'songs/vivaldi-' + s1 + '.mp3';
    // - remove buttons
    document.getElementById('springBtn').classList.remove('activeBtn');
    document.getElementById('summerBtn').classList.remove('activeBtn');
    document.getElementById('autumnBtn').classList.remove('activeBtn');
    document.getElementById('winterBtn').classList.remove('activeBtn');
    // - add active class to clicked button
    document.getElementById(s1 + 'Btn').classList.add('activeBtn');
}