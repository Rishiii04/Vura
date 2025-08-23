 // Parallax scroll effects
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            const heroBackground = document.querySelector('.hero-background');
            
            if (heroBackground) {
                heroBackground.style.transform = `translate3d(0, ${rate}px, 0)`;
            }

            // Floating elements parallax
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach((element, index) => {
                const speed = 0.15 + (index * 0.05);
                element.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;
            });
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Interactive hover effects for content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.addEventListener('mouseenter', () => {
                section.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            section.addEventListener('mouseleave', () => {
                section.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Edit profile button interaction
        document.querySelector('.edit-profile-btn').addEventListener('click', () => {
            alert('Edit Profile functionality would be implemented here!');
        });

        // Wishlist item interactions
        document.querySelectorAll('.wishlist-item').forEach(item => {
            item.addEventListener('click', () => {
                const itemName = item.querySelector('.wishlist-name').textContent;
                alert(`You clicked on: ${itemName}`);
            });
        });

        // Order item hover effects
        document.querySelectorAll('.order-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.boxShadow = '0 10px 25px rgba(59, 47, 47, 0.15)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.boxShadow = 'none';
            });
        });

        // Smooth scroll behavior for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        