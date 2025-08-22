 // Form switching functionality
        const loginToggle = document.getElementById('loginToggle');
        const signupToggle = document.getElementById('signupToggle');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const showSignup = document.getElementById('showSignup');
        const showLogin = document.getElementById('showLogin');

        function switchToLogin() {
            loginToggle.classList.add('active');
            signupToggle.classList.remove('active');
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
        }

        function switchToSignup() {
            signupToggle.classList.add('active');
            loginToggle.classList.remove('active');
            signupForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
        }

        loginToggle.addEventListener('click', switchToLogin);
        signupToggle.addEventListener('click', switchToSignup);
        showSignup.addEventListener('click', switchToSignup);
        showLogin.addEventListener('click', switchToLogin);

        // Form submission
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = loginForm.querySelector('.submit-btn');
            btn.innerHTML = 'Signing in...';
            setTimeout(() => {
                btn.innerHTML = 'Login';
                alert('Login functionality would be implemented here!');
            }, 2000);
        });

        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = signupForm.querySelector('.submit-btn');
            btn.innerHTML = 'Creating Account...';
            setTimeout(() => {
                btn.innerHTML = 'Sign Up';
                alert('Signup functionality would be implemented here!');
            }, 2000);
        });

        // Add some interactive yarn ball effects
        document.querySelectorAll('.yarn-ball').forEach(ball => {
            ball.addEventListener('mouseenter', () => {
                ball.style.transform = 'scale(1.2)';
                ball.style.transition = 'transform 0.3s ease';
            });
            
            ball.addEventListener('mouseleave', () => {
                ball.style.transform = 'scale(1)';
            });
        });