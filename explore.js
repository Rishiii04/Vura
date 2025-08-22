 // Parallax scroll effects
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            const heroBackground = document.querySelector('.hero-background');
            
            if (heroBackground) {
                heroBackground.style.transform = `translate3d(0, ${rate}px, 0)`;
            }

            // Floating elements parallax
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach((element, index) => {
                const speed = 0.2 + (index * 0.1);
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

        // 3D tilt effect on product cards
        document.querySelectorAll('[data-tilt]').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const deltaX = (e.clientX - centerX) * 0.05;
                const deltaY = (e.clientY - centerY) * 0.05;
                
                card.style.transform = `perspective(1000px) rotateX(${deltaY}deg) rotateY(${deltaX}deg) translateZ(20px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            });
        });

        // Enhanced scroll-triggered animations
        let animationId;
        const handleScroll = () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            
            animationId = requestAnimationFrame(() => {
                const scrollTop = window.pageYOffset;
                const windowHeight = window.innerHeight;
                
                // Product cards staggered animation
                const productCards = document.querySelectorAll('.product-card');
                productCards.forEach((card, index) => {
                    const rect = card.getBoundingClientRect();
                    if (rect.top < windowHeight * 0.8) {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 100);
                    }
                });
            });
        };

        window.addEventListener('scroll', handleScroll);
        
        // Initialize cards as hidden
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });

        // Trigger initial scroll check
        handleScroll();