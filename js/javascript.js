// --- SEO Enhancement: Add meta tags dynamically if not present ---

document.addEventListener('DOMContentLoaded', function () {
    // Add meta description if not present
    if (!document.querySelector('meta[name="description"]')) {
        const metaDesc = document.createElement('meta');
        metaDesc.name = "description";
        metaDesc.content = "TrueForm Gym - Achieve your fitness goals with our expert trainers, modern facilities, and personalized programs.";
        document.head.appendChild(metaDesc);
    }

    // Add meta keywords if not present
    if (!document.querySelector('meta[name="keywords"]')) {
        const metaKeywords = document.createElement('meta');
        metaKeywords.name = "keywords";
        metaKeywords.content = "TrueForm Gym, fitness, gym, trainers, membership, health, wellness, group classes, personal training";
        document.head.appendChild(metaKeywords);
    }

    // Add canonical link if not present
    if (!document.querySelector('link[rel="canonical"]')) {
        const canonical = document.createElement('link');
        canonical.rel = "canonical";
        canonical.href = window.location.href;
        document.head.appendChild(canonical);
    }

    // Highlight active navigation link
    const navLinks = document.querySelectorAll('.navbar a');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Back to Top button functionality
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'back-to-top';
    backToTopButton.textContent = '↑';
    document.body.appendChild(backToTopButton);

    // Show or hide the Back to Top button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll to the top when the Back to Top button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Form validation for enquiry.html
    if (window.location.pathname.includes('enquiry.html')) {
        const form = document.querySelector('form');
        if (form) {
            form.addEventListener('submit', (e) => {
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const message = document.getElementById('message').value.trim();

                if (!name || !email || !message) {
                    e.preventDefault();
                    alert('Please fill out all fields.');
                } else if (!/\S+@\S+\.\S+/.test(email)) {
                    e.preventDefault();
                    alert('Please enter a valid email address.');
                }
            });
        }
    }

    // Dynamic testimonials for about.html
    if (window.location.pathname.includes('about.html')) {
        const testimonials = [
            { text: '"TrueForm Gym has completely transformed my life!"', author: '- Sarah M.' },
            { text: '"I love the group classes! They are so motivating and fun."', author: '- James T.' },
            { text: '"The personalized training programs helped me achieve my fitness goals."', author: '- Lisa K.' }
        ];

        let currentTestimonial = 0;

        function updateTestimonial() {
            const testimonialText = document.getElementById('testimonial-text');
            const testimonialAuthor = document.getElementById('testimonial-author');

            if (testimonialText && testimonialAuthor) {
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                testimonialText.textContent = testimonials[currentTestimonial].text;
                testimonialAuthor.textContent = testimonials[currentTestimonial].author;
            }
        }

        setInterval(updateTestimonial, 5000); // Change every 5 seconds
    }
});