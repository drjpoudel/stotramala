
        document.addEventListener('DOMContentLoaded', () => {
            const fireworksContainer = document.getElementById('fireworks');
            const colors = ['#ff0044', '#ffbb00', '#00ff88', '#00bfff', '#ff00ff'];
            const numParticles = 100;
            const interval = 3000; // Interval time in milliseconds (3 seconds)

            function createFirework(x, y) {
                for (let i = 0; i < numParticles; i++) {
                    const firework = document.createElement('div');
                    firework.classList.add('firework');
                    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    firework.style.width = '8px';
                    firework.style.height = '8px';
                    firework.style.left = `${x}px`;
                    firework.style.bottom = '0'; // Start from the bottom
                    fireworksContainer.appendChild(firework);

                    const angle = Math.random() * Math.PI * 2;
                    const distance = Math.random() * 150;
                    const duration = Math.random() * 1000 + 500;

                    firework.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`;
                    firework.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(1)`;
                    firework.style.opacity = '1';
                    firework.style.bottom = `${y}px`; // Animate from the bottom to the click position

                    setTimeout(() => {
                        firework.style.opacity = '0';
                        firework.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`;
                        setTimeout(() => fireworksContainer.removeChild(firework), duration);
                    }, duration);
                }
            }

            function getRandomPosition() {
                return {
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight
                };
            }

            setInterval(() => {
                const { x, y } = getRandomPosition();
                createFirework(x, y);
            }, interval);
        });
   
