document.getElementById('yesBtn').addEventListener('click', function() {
  document.getElementById('question').classList.add('hidden');
  document.getElementById('celebration').classList.remove('hidden');

  // Optionnel : jouer un son (ex: "ding")
  // const audio = new Audio('assets/cheer.mp3');
  // audio.play().catch(e => console.log("Son bloqué"));
});

document.getElementById('noBtn').addEventListener('click', function() {
  // Effet drôle : déplacer le bouton "Non"
  const noBtn = this;
  noBtn.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 100 - 50}px)`;
  noBtn.style.transition = 'transform 0.4s ease';
  
  // Réinitialiser après 1s
  setTimeout(() => {
    noBtn.style.transform = '';
  }, 1000);
});