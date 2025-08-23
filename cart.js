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

        // Cart functionality
        function updateQuantity(button, change) {
            const quantityDisplay = button.parentNode.querySelector('.quantity-display');
            let currentQuantity = parseInt(quantityDisplay.textContent);
            const newQuantity = Math.max(1, currentQuantity + change);
            quantityDisplay.textContent = newQuantity;
            updateOrderSummary();
        }

        function removeItem(button) {
            const cartItem = button.closest('.cart-item');
            cartItem.style.transform = 'translateX(-100%)';
            cartItem.style.opacity = '0';
            
            setTimeout(() => {
                cartItem.remove();
                updateOrderSummary();
                checkIfCartEmpty();
            }, 300);
        }

        function updateOrderSummary() {
            // This would calculate actual totals based on cart contents
            // For demo purposes, using static calculations
            const cartItems = document.querySelectorAll('.cart-item');
            let totalItems = 0;
            let subtotal = 0;
            
            cartItems.forEach(item => {
                const quantity = parseInt(item.querySelector('.quantity-display').textContent);
                const priceText = item.querySelector('.item-price').textContent;
                const price = parseInt(priceText.replace('₹', '').replace(',', ''));
                totalItems += quantity;
                subtotal += price * quantity;
            });
            
            const shipping = subtotal > 3000 ? 0 : 199;
            const giftWrap = 99;
            const discount = Math.floor(subtotal * 0.1);
            const total = subtotal + shipping + giftWrap - discount;
            
            // Update summary display (simplified for demo)
            document.querySelector('.summary-row:first-child span:first-child').textContent = `Items (${totalItems})`;
            document.querySelector('.summary-row:first-child span:last-child').textContent = `₹${subtotal.toLocaleString()}`;
        }

        function checkIfCartEmpty() {
            const cartItems = document.querySelectorAll('.cart-item');
            const cartItemsList = document.getElementById('cart-items-list');
            const emptyCart = document.getElementById('empty-cart');
            
            if (cartItems.length === 0) {
                cartItemsList.style.display = 'none';
                emptyCart.style.display = 'block';
            }
        }

        function checkout() {
            alert('Proceeding to checkout... 🛍️\n\nThis is a demo. In a real application, this would redirect to the payment page.');
        }

        // Initialize
        updateOrderSummary();