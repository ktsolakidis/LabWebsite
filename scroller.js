document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    let prevScrollPos = window.pageYOffset;

    header.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            const sectionId = event.target.innerText.toLowerCase().replace(/\s+/g, '-');
            const section = document.getElementById(sectionId);

            if (section) {
                event.preventDefault();
                smoothScrollTo(section.offsetTop);
            }
        }
    });

    function smoothScrollTo(targetPosition) {
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 2500; // Adjust the duration as needed
        let startTimestamp;

        function step(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;

            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            window.scrollTo(0, startPosition + distance * easeInOut(progress));

            if (elapsed < duration) {
                window.requestAnimationFrame(step);
            } else {
                // Scroll animation is complete, hide the header
                header.style.display = 'none';
            }
        }

        function easeInOut(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }

        window.requestAnimationFrame(step);
    }

    const contactUsButton = document.getElementById('contact--us')
    const contactUsSection = document.getElementById('contact')

    contactUsButton.addEventListener('click', () => {
        smoothScrollTo(contactUsSection.offsetTop)
    });

    window.addEventListener('scroll', function () {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            // User has scrolled up
            header.style.display = 'flex';
        } else {
            // User has scrolled down
            header.style.display = 'none';
        }

        // Update previous scroll position
        prevScrollPos = currentScrollPos;
    });

    window.addEventListener('mousemove', function (event) {
        const mouseY = event.clientY;
        const screenHeight = window.innerHeight;
        const topThreshold = screenHeight * 0.06;

        if (mouseY <= topThreshold) {
            header.style.display = 'flex';
        }
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    rootMargin: '400px' // Adjust this value as needed
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));
