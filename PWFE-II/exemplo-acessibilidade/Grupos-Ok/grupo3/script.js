const open=document.getElementById('open'),close=document.getElementById('close'),modal=document.getElementById('modal');
open.addEventListener('click',()=>{modal.classList.remove('hidden');close.focus();});
close.addEventListener('click',()=>{modal.classList.add('hidden');open.focus();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.classList.contains('hidden')){modal.classList.add('hidden');open.focus();}});