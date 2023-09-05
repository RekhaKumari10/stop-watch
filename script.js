let timerDisplay=document.querySelector('.timerDisplay');

let startbtn=document.getElementById('startbtn');
let stopbtn=document.getElementById('stopbtn');
let resetbutton=document.getElementById('resetbtn');

let msec= 0;
let secs= 0;
let mins= 0;

let timerId=null;

// start button
startbtn.addEventListener('click',function(){
    if(timerId!==null){
        clearInterval(timerId);
    }
    timerId=setInterval(startTimer,10);
});

// stop button
stopbtn.addEventListener('click',function(){
        clearInterval(timerId);
});

// restart button
resetbtn.addEventListener('click',function(){
    clearInterval(timerId);
    timerDisplay.innerHTML=`00 : 00 : 00`;
     mins=secs=msec=0;
});

function startTimer(){
    msec++
    if(msec==100)
    {
        msec=0;
        secs++;
        if(secs==60)
        {
            secs=0;
            mins++;
        }
    }

    let msecstring= msec<10 ? `0${msec}` :msec;
    let secsstring= secs<10 ? `0${secs}` :secs;
    let minsstring= mins<10 ? `0${mins}` :mins;

    timerDisplay.innerHTML=`${msecstring} : ${secsstring} : ${minsstring}`;
}



