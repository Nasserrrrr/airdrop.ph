// Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            header.classList.toggle('sticky', window.scrollY > 100);
        });

        // Mobile menu toggle
        document.getElementById('menu-icon').addEventListener('click', function() {
            document.querySelector('.nav-icons').classList.toggle('active');
            this.classList.toggle('fa-times');
        });

        // Close mobile menu when clicking a nav item
        document.querySelectorAll('.nav-icon').forEach(icon => {
            icon.addEventListener('click', () => {
                document.querySelector('.nav-icons').classList.remove('active');
                document.getElementById('menu-icon').classList.remove('fa-times');
            });
        });

        // Show More Airdrops functionality
        document.addEventListener('DOMContentLoaded', function() {
            const showMoreBtn = document.querySelector('.show-more-btn');
            const backToTopBtn = document.querySelector('.back-to-top');
            const airdropBoxes = document.querySelectorAll('.airdrops-box');
            
            let visibleCount = 12;
            const increment = 12;

            // Initial visibility
            airdropBoxes.forEach((box, index) => {
                if (index < visibleCount) box.classList.add('visible');
            });

            showMoreBtn.addEventListener('click', function() {
                const nextBoxes = Array.from(airdropBoxes).slice(visibleCount, visibleCount + increment);
                
                nextBoxes.forEach(box => {
                    box.classList.add('visible');
                });

                visibleCount += nextBoxes.length;
                
                if (visibleCount >= airdropBoxes.length) {
                    showMoreBtn.style.display = 'none';
                    backToTopBtn.classList.add('show');
                }
            });

            // Back to Top functionality
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            // Show floating back to top when scrolling down
            window.addEventListener('scroll', () => {
                if (window.scrollY > 500) {
                    if (!backToTopBtn.classList.contains('show') && 
                        showMoreBtn.style.display !== 'none') {
                        backToTopBtn.classList.add('show');
                    }
                } else {
                    backToTopBtn.classList.remove('show');
                }
            });
        });
