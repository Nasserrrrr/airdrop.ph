document.addEventListener('DOMContentLoaded', function() {
            const showMoreBtn = document.querySelector('.show-more-btn');
            const backToTopBtn = document.querySelector('.back-to-top');
            const airdropBoxes = document.querySelectorAll('.airdrops-box');
            const buttonContainer = document.querySelector('.button-container');
            
            let visibleCount = 12;
            const increment = 12;

            // Initial visibility
            airdropBoxes.forEach((box, index) => {
                if (index < visibleCount) box.classList.add('visible');
            });

            // Show More functionality
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
