window.addEventListener('keydown',function(e){
   const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key=document.querySelector(`.word[data-key="${e.keyCode}"]`)
   if(!audio) return;
    
   audio.currentTime=0;
   audio.play();
   key.classList.add('playing');
   window.addEventListener('transitionend',function(e){          /* if I placed keyword in the event then it will not look at the transitiion time.......
      but in this i will take care for transition time but not take for key holding /// */
      key.classList.remove('playing');
   });
});