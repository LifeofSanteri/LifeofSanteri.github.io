function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function copyEmailToClipboard(event) {
  event.preventDefault();
  const email = "santeri.savolainen@hotmail.com";

  const input = document.createElement('input');
  input.style.position = 'fixed';
  input.style.opacity = 0;
  input.value = email;

  document.body.appendChild(input);

  input.select();
  input.setSelectionRange(0, 99999);

  document.execCommand('copy');

  document.body.removeChild(input);

  const notification = document.querySelector('.notification');
  notification.innerHTML = 'Email address copied to clipboard! ✓ ';
  notification.style.display = 'block';

  setTimeout(function () {
    notification.style.display = 'none';
  }, 3000);
}



