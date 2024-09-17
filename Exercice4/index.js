console.log("JavaScript chargé");

document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.getElementById('myButton');
  const messageParagraph = document.getElementById('message');

  button.addEventListener('click', () => {
    messageParagraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
  });
});


