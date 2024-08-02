window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222'; // Darker background when scrolled
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)'; // Add shadow when scrolled
    } else {
        navbar.style.backgroundColor = '#333'; // Original background color
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)'; // Original shadow
    }
});
