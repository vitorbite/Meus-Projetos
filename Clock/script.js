const hand1 = document.getElementById('hand1');
const hand2 = document.getElementById('hand2');
const hand3 = document.getElementById('hand3');

setInterval(()=>{
    let timer = document.querySelector('.timer');
    
    let data = new Date();
    let hours = data.getHours().toString();
    let min = data.getMinutes().toString();
    let sec = data.getSeconds().toString();
    timer.innerHTML = (`${hours.padStart(2, 0)}:${min.padStart(2, 0)}`)

    let hoursDeg = (hours*30) + (min/2);
    let minDeg = (min * 6);
    let secDeg = (sec * 6);

    hand1.style.transform = `translate(-50%, -50%) rotateZ(${hoursDeg}deg)`;
    hand2.style.transform = `translate(-50%, -50%) rotateZ(${minDeg}deg)`;
    hand3.style.transform = `translate(-50%, -50%) rotateZ(${secDeg}deg)`;
    
}, 1000);
