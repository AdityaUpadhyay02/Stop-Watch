let timerdisplay = document.querySelector('.timerdisplay');
let stopbtn = document.getElementById("stopbtn");
let startbtn = document.getElementById("startbtn");
let resetbtn = document.getElementById("resetbtn");

let msec = "";
let secs = "";
let mins = "";
let timeId = null;

startbtn.addEventListener('click', function () {
    if (timeId !== 0) {
        clearInterval(timeId);
    }
    timeId = setInterval(starttimer, 10);
});


stopbtn.addEventListener('click', function () {
    clearInterval(timeId);
});


resetbtn.addEventListener('click', function () {
    clearInterval(timeId);
    timerdisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0; 
});

function starttimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }

    let msecstring;
    let secsstring;
    let minsstring;


    if (msec < 10) {
        msecstring = `0${msec}`;
    }
    else {
        msecstring = msec;
    }


    if (secs < 10) {
        secsstring = `0${secs}`;
    }
    else {
        secsstring = secs;
    }

    if (mins < 10) {
        minsstring = `0${mins}`;
    }
    else {
        minsstring = mins;
    }

    timerdisplay.innerHTML = `${minsstring} : ${secsstring} : ${msecstring}`;


}

