
document.addEventListener('DOMContentLoaded', function() {
    const hoverMenu = document.getElementById('hover-menu');
    
    // Example: show/hide the menu on hover
    document.body.addEventListener('mouseover', function(event) {
        if (event.target.closest('header')) {
            hoverMenu.style.display = 'block';
        }
    });
    
    document.body.addEventListener('mouseout', function(event) {
        if (!event.target.closest('header')) {
            hoverMenu.style.display = 'none';
        }
    });
});
