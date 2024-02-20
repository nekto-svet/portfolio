document.addEventListener('DOMContentLoaded', function () {
    // Select all nav links
    var navLinks = document.querySelectorAll('.navbar-nav li a');

    // Function to remove 'active' class from all links
    function removeActiveClass() {
        navLinks.forEach(function(link) {
            link.classList.remove('active');
        });
    }

    // Add click event listener to each link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function () {
            // Remove 'active' class from all links
            removeActiveClass();
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});

