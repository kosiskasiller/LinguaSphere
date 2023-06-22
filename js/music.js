const audio = document.getElementById('bg-music');
    const toggleBtn = document.getElementById('toggle-music-btn');
   
    toggleBtn.addEventListener('click', function() {
   if (audio.muted) {
     audio.muted = false;
     toggleBtn.textContent = 'Mute';
   } else {
     audio.muted = true;
     toggleBtn.textContent = 'Unmute';
   }
    });