var button = document.getElementById('aniButton');

button.addEventListener('mouseover', function() {
  button.style.transform = 'scale(1.2)';
});

button.addEventListener('mouseout', function() {
  button.style.transform = 'scale(1)';
});

