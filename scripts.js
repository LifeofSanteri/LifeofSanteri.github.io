function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const burger = document.querySelector('.burger');

  navLinks.classList.toggle('show');
  burger.classList.toggle('change');
}


function toggleNav() {
    var links = document.querySelector('.links');
    links.style.display = (links.style.display === 'none' || links.style.display === '') ? 'flex' : 'none';
}



document.addEventListener('DOMContentLoaded', function() {
    const containerElements = document.querySelectorAll('.container');
  
    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible-text');
        } else {
          entry.target.classList.remove('visible-text');
        }
      });
    }
  
    const observer = new IntersectionObserver(handleIntersect, { threshold: 0.5 });
  
    containerElements.forEach(container => {
      observer.observe(container);
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const animationElements = document.querySelectorAll('.animation-element');
  
    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }
  
    const observer = new IntersectionObserver(handleIntersect, { threshold: 0 });
  
    animationElements.forEach((element) => {
      observer.observe(element);
    });
  });
  
  
  
      function openEmail() {
      const emailAddress = 'santeri.savolainen@hotmail.com';
  
      // Copy the email address to the clipboard
      navigator.clipboard.writeText(emailAddress).then(function () {
          console.log('Email address copied to clipboard:', emailAddress);
  
          // Open the default email application
          window.location.href = 'mailto:' + emailAddress;
      }).catch(function (err) {
          console.error('Error copying to clipboard:', err);
  
          // In case of an error, still attempt to open the email application
          window.location.href = 'mailto:' + emailAddress;
      });
  }