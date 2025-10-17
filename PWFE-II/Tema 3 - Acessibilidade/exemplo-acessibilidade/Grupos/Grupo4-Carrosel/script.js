let idx=0, timer=null;

function start(){
  const slides=document.querySelectorAll('.slide');
  timer=setInterval(()=>{
    idx=(idx+1)%slides.length;
    slides.forEach((s,i)=>s.style.transform=`translateX(${(i-idx)*100}%)`);
  },1500);
}
start();