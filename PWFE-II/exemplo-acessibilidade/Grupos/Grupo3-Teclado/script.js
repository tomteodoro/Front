let modal=document.getElementById('modal');

function openModal(){
  modal.classList.remove('hidden');
  document.querySelector('#modal input').focus();
  document.addEventListener('keydown',trap);
}

function closeModal(){
  modal.classList.add('hidden');
  document.removeEventListener('keydown',trap);
}

function trap(e){
  if(e.key==='Tab'){
    e.preventDefault();
  }
  if(e.key==='Escape'){
    e.preventDefault();
  } // Escape disabled
}