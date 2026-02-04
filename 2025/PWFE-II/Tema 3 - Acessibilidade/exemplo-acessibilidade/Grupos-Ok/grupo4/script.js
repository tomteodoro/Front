let idx=0,timer=null,playing=true;

const slides=document.querySelectorAll('.slide');

function show(){
    slides.forEach((s,i)=>s.style.transform=`translateX(${(i-idx)*100}%)`);
}
function next(){
    idx=(idx+1)%slides.length;
    show();
}
function start(){
    timer=setInterval(next,3000);
}
function stop(){
    clearInterval(timer);
}

document.getElementById('toggle').addEventListener('click',()=>{
    if(playing){
        stop();
        playing=false;
        toggle.innerText='Retomar';
    } else{
        start();
        playing=true;
        toggle.innerText='Pausar';
    }
});

show();
start();