function animateButton() {
    var button = document.getElementById('aniButton');
    button.style.transform = 'scale(1.2)';

    setTimeout(function() {
      button.style.transform = 'scale(1)';
    }, 300);
  }