const hoverMenu = document.getElementById('hover-menu');

// Function to show the menu on hover
hoverMenu.addEventListener('mouseenter', function() {
  hoverMenu.style.display = 'block';
});

// Function to hide the menu when mouse leaves
hoverMenu.addEventListener('mouseleave', function() {
  hoverMenu.style.display = 'none';
});
