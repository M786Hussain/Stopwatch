

let timerdisplay = document.getElementById('timerdisplay');

let btnStop = document.getElementById('btnstop');
let btnStart = document.getElementById('btnstart');
let btnReset = document.getElementById('btnreset');

let msec = 0, secs = 0, mins = 0;
let timerId = null;

btnStart.addEventListener('click', function(){
    if (timerId === null) {  
        timerId = setInterval(startTimer, 10);
    }
});

btnStop.addEventListener('click', function(){
    clearInterval(timerId);
    timerId = null;
});

btnReset.addEventListener('click', function(){
    clearInterval(timerId);
    timerId = null;
    msec = 0;
    secs = 0;
    mins = 0;
    timerdisplay.innerText = `00:00:00`;
});

function startTimer() {
    msec++;
    if (msec === 100) {
        msec = 0;
        secs++;
        if (secs === 60) {
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerdisplay.innerText = `${minsString}:${secsString}:${msecString}`;
}

