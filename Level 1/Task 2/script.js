document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar li a');
    const sections = document.querySelectorAll('.section');

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId);
        });
    });

    // Scroll event listener to highlight active link
    window.addEventListener('scroll', function () {
        const currentSection = Array.from(sections).find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= 85 && rect.bottom >= 85;
        });

        if (currentSection) {
            const sectionId = currentSection.id;
            updateActiveLink(sectionId);
        }
    });

    // Function to scroll to a section
    function scrollToSection(targetId) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }

    // Function to update active link
    function updateActiveLink(sectionId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }
});