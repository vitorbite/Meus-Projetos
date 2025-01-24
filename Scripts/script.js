const hand1 = document.getElementById('hand1');
const hand2 = document.getElementById('hand2');
const hand3 = document.getElementById('hand3');
let hora = document.getElementById('timer');
let clock = document.querySelector('.relogio');
let buttons = document.getElementById('buttons');
let cronometro = true;
buttons.classList.add('hidden');

document.addEventListener('click', (e)=>{
    let el = e.target;
    if(el.classList.contains('button')){
        cronometro = !cronometro;
        Reset();
        clock.classList.add('hidden');
        hora.innerText = '00:00'
        hora.classList.remove('cronometro');
        buttons.classList.add('hidden');
        if(!cronometro){
            hora.classList.add('cronometro');
            buttons.classList.remove('hidden');

        }
    }
})

setInterval(()=>{
    if(cronometro){
        clock.classList.remove('hidden');
        let data = new Date();
        let hours = data.getHours().toString();
        let min = data.getMinutes().toString();
        let sec = data.getSeconds().toString();
        hora.innerText = (`${hours.padStart(2, 0)}:${min.padStart(2, 0)}`)
        
        let hoursDeg = (hours*30) + (min/2);
        let minDeg = (min * 6);
        let secondsDeg = (sec * 6);

    hand1.style.transform = `translate(-50%, -50%) rotateZ(${hoursDeg}deg)`;
    hand2.style.transform = `translate(-50%, -50%) rotateZ(${minDeg}deg)`;
    hand3.style.transform = `translate(-50%, -50%) rotateZ(${secondsDeg}deg`;
}  
}, 1000);

    if(cronometro){
    let timer;
    let seconds = 0;
    function start(){
        if (!timer){
            clearInterval(timer);
            timer = setInterval(Update, 1000);
        }
    }
    function stop(){
        clearInterval(timer);
        timer = null;
    }
    function Reset(){
        clearInterval(timer);
        stop();
        document.getElementById('timer').textContent = '00:00:00'; 
        seconds = 0;
    }
    function Update(){
        seconds++
        let horas = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds) / 60);
        let segundos = Math.floor(seconds % 60);
        document.getElementById('timer').textContent = (`${horas.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${segundos.toString().padStart(2,'0')}`)
        start();
    }
    }
  