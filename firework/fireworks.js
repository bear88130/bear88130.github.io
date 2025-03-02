document.addEventListener('DOMContentLoaded', () => {
    // Canvas setup
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d', { alpha: false }); // Disable alpha for better performance
    
    // Set canvas to full window size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // UI controls
    const launchBtn = document.getElementById('launchBtn');
    const particleCountSlider = document.getElementById('particleCount');
    const particleCountValue = document.getElementById('particleCountValue');
    const shellSizeSlider = document.getElementById('shellSize');
    const shellSizeValue = document.getElementById('shellSizeValue');
    const colorTransitionsSlider = document.getElementById('colorTransitions');
    const colorTransitionsValue = document.getElementById('colorTransitionsValue');
    
    // Update UI values
    particleCountSlider.addEventListener('input', () => {
        particleCountValue.textContent = particleCountSlider.value;
    });
    
    shellSizeSlider.addEventListener('input', () => {
        shellSizeValue.textContent = shellSizeSlider.value;
    });
    
    colorTransitionsSlider.addEventListener('input', () => {
        colorTransitionsValue.textContent = colorTransitionsSlider.value;
    });
    
    // Performance optimization: Pre-calculate values
    const TWO_PI = Math.PI * 2;
    
    // Shape definitions
    const shapes = {
        sphere: (angle, layer, layers) => {
            const layerRadius = Math.PI * layer / layers;
            const circleRadius = Math.sin(layerRadius);
            const layerHeight = Math.cos(layerRadius);
            
            return {
                x: Math.cos(angle) * circleRadius,
                y: layerHeight
            };
        },
        
        star: (angle, layer, layers) => {
            // Star shape with 5 points
            const points = 5;
            const innerRadius = 0.4; // Inner radius of star
            const outerRadius = 1.0; // Outer radius of star
            const layerFactor = layer / layers;
            
            // Determine if we're at a star point or valley
            const pointAngle = (angle + Math.PI / points) % (TWO_PI / points) - Math.PI / points;
            const normalizedPointAngle = Math.abs(pointAngle) / (Math.PI / points);
            
            // Calculate radius based on whether we're at a point or valley
            const radius = outerRadius - (outerRadius - innerRadius) * normalizedPointAngle;
            
            return {
                x: Math.cos(angle) * radius * layerFactor,
                y: Math.sin(angle) * radius * layerFactor
            };
        },
        
        heart: (angle, layer, layers) => {
            // Heart shape formula
            const layerFactor = layer / layers;
            
            // Parametric heart equation
            const t = angle;
            let x = 16 * Math.pow(Math.sin(t), 3);
            let y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
            
            // Normalize and scale
            const scale = 1 / 16;
            x = x * scale * layerFactor;
            y = -y * scale * layerFactor; // Flip y to make heart upright
            
            return { x, y };
        },
        
        rabbit: (angle, layer, layers) => {
            // Simple rabbit shape
            const layerFactor = layer / layers;
            
            // Body (oval)
            let x = Math.cos(angle) * 0.8;
            let y = Math.sin(angle) * 1.2;
            
            // Add ears for certain angles
            if (angle > 0 && angle < Math.PI/4) {
                // Right ear
                x = Math.cos(angle) * 0.3 + 0.5;
                y = Math.sin(angle) * 0.8 - 0.8;
            } else if (angle > 7*Math.PI/4 && angle < TWO_PI) {
                // Left ear
                x = Math.cos(angle) * 0.3 - 0.5;
                y = Math.sin(angle) * 0.8 - 0.8;
            }
            
            return {
                x: x * layerFactor,
                y: y * layerFactor
            };
        },
        
        ufo: (angle, layer, layers) => {
            // UFO shape
            const layerFactor = layer / layers;
            
            // Main saucer body
            let x = Math.cos(angle) * 1.2;
            let y = Math.sin(angle) * 0.4;
            
            // Add dome for top half
            if (y < 0) {
                y = y * 0.8;
            }
            
            return {
                x: x * layerFactor,
                y: y * layerFactor
            };
        }
    };
    
    // Firework classes
    class Particle {
        constructor(x, y, size, color, velocity, gravity, drag, fade, colorTransitions, lifespan, delay = 0) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.baseSize = size;
            this.color = color;
            this.initialColor = color;
            this.velocity = velocity;
            this.gravity = gravity;
            this.drag = drag;
            this.fade = fade;
            this.alpha = 1;
            this.colorTransitions = colorTransitions;
            this.currentColorIndex = 0;
            this.colorTransitionProgress = 0;
            this.lifespan = lifespan;
            this.age = 0;
            this.delay = delay;
            this.active = delay <= 0;
            
            // Pre-calculate color values for better performance
            if (colorTransitions.length > 1) {
                this.colorValues = colorTransitions.map(this.parseColor);
            }
        }
        
        parseColor(color) {
            if (color.startsWith('#')) {
                const r = parseInt(color.slice(1, 3), 16);
                const g = parseInt(color.slice(3, 5), 16);
                const b = parseInt(color.slice(5, 7), 16);
                return [r, g, b];
            } else if (color.startsWith('rgb')) {
                return color.match(/\d+/g).map(Number);
            }
            return [255, 255, 255]; // Default to white
        }
        
        update(deltaTime) {
            if (!this.active) {
                this.delay -= deltaTime;
                if (this.delay <= 0) {
                    this.active = true;
                }
                return;
            }
            
            // Update position
            this.x += this.velocity.x * deltaTime;
            this.y += this.velocity.y * deltaTime;
            
            // Apply gravity
            this.velocity.y += this.gravity * deltaTime;
            
            // Apply drag (air resistance)
            this.velocity.x *= Math.pow(this.drag, deltaTime);
            this.velocity.y *= Math.pow(this.drag, deltaTime);
            
            // Update age and alpha
            this.age += deltaTime;
            this.alpha = Math.max(0, 1 - (this.age / this.lifespan));
            
            // Update size (particles get smaller as they age)
            this.size = this.baseSize * (0.5 + 0.5 * this.alpha);
            
            // Handle color transitions
            if (this.colorTransitions.length > 1) {
                this.colorTransitionProgress += deltaTime / (this.lifespan / this.colorTransitions.length);
                
                if (this.colorTransitionProgress >= 1 && this.currentColorIndex < this.colorTransitions.length - 1) {
                    this.currentColorIndex++;
                    this.colorTransitionProgress = 0;
                }
                
                if (this.currentColorIndex < this.colorTransitions.length - 1) {
                    const [r1, g1, b1] = this.colorValues[this.currentColorIndex];
                    const [r2, g2, b2] = this.colorValues[this.currentColorIndex + 1];
                    
                    const factor = this.colorTransitionProgress;
                    const r = Math.round(r1 + factor * (r2 - r1));
                    const g = Math.round(g1 + factor * (g2 - g1));
                    const b = Math.round(b1 + factor * (b2 - b1));
                    
                    this.color = `rgb(${r}, ${g}, ${b})`;
                } else {
                    this.color = this.colorTransitions[this.currentColorIndex];
                }
            }
        }
        
        draw(ctx) {
            if (!this.active) return;
            
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, TWO_PI);
            ctx.fill();
            
            // Add glow effect - only for larger particles to improve performance
            if (this.size > 1.5) {
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.size * 2
                );
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
                
                ctx.globalAlpha = this.alpha * 0.5;
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 2, 0, TWO_PI);
                ctx.fill();
            }
        }
        
        isAlive() {
            return this.age < this.lifespan;
        }
    }
    
    class Firework {
        constructor(x, y, targetY, particleCount, shellSize, colorTransitions) {
            this.x = x;
            this.y = y;
            this.targetY = targetY;
            // Increase initial velocity significantly to reach much higher
            this.velocity = { x: 0, y: -80 };
            // Reduce gravity to allow fireworks to travel higher
            this.gravity = 6.5;
            this.particles = [];
            this.exploded = false;
            this.particleCount = particleCount;
            // Increase shell size by 3-5 times
            this.shellSize = shellSize * (3 + Math.random() * 2); // 3-5 times larger
            this.colorTransitions = this.generateColorTransitions(colorTransitions);
            this.trailParticles = [];
            this.size = 3;
            
            // Randomly select a shape for this firework
            const shapeKeys = Object.keys(shapes);
            this.shape = shapeKeys[Math.floor(Math.random() * shapeKeys.length)];
        }
        
        generateColorTransitions(count) {
            // Japanese fireworks often use these colors
            const baseColors = [
                '#ff0000', // Red
                '#ff9500', // Orange
                '#ffff00', // Yellow
                '#00ff00', // Green
                '#00ffff', // Cyan
                '#0000ff', // Blue
                '#ff00ff', // Magenta
                '#ffffff', // White
                '#ffccaa', // Peach
                '#ff66cc'  // Pink
            ];
            
            // Create a sequence of colors for transitions
            const colors = [];
            for (let i = 0; i < count; i++) {
                colors.push(baseColors[Math.floor(Math.random() * baseColors.length)]);
            }
            return colors;
        }
        
        update(deltaTime) {
            if (!this.exploded) {
                // Update rocket position
                this.x += this.velocity.x * deltaTime;
                this.y += this.velocity.y * deltaTime;
                
                // Apply gravity
                this.velocity.y += this.gravity * deltaTime * 0.7;
                
                // Create trail particles - reduce frequency for better performance
                if (Math.random() < 0.2) {
                    this.trailParticles.push(new Particle(
                        this.x, 
                        this.y, 
                        Math.random() * 2 + 1,
                        '#ffaa33',
                        { 
                            x: (Math.random() - 0.5) * 2, 
                            y: Math.random() * 2 + 1
                        },
                        this.gravity,
                        0.95,
                        0.1,
                        ['#ffaa33', '#ff8800'],
                        0.5
                    ));
                }
                
                // Update trail particles
                this.trailParticles = this.trailParticles.filter(particle => {
                    particle.update(deltaTime);
                    return particle.isAlive();
                });
                
                // Check if rocket should explode
                if (this.velocity.y >= 0 || this.y <= this.targetY) {
                    this.explode();
                }
            } else {
                // Update explosion particles
                this.particles = this.particles.filter(particle => {
                    particle.update(deltaTime);
                    return particle.isAlive();
                });
            }
        }
        
        draw(ctx) {
            if (!this.exploded) {
                // Draw rocket
                ctx.globalAlpha = 1;
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, TWO_PI);
                ctx.fill();
                
                // Draw glow
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.size * 3
                );
                gradient.addColorStop(0, 'rgba(255, 200, 50, 0.8)');
                gradient.addColorStop(1, 'rgba(255, 200, 50, 0)');
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 3, 0, TWO_PI);
                ctx.fill();
            }
            
            // Draw trail particles
            this.trailParticles.forEach(particle => particle.draw(ctx));
            
            // Draw explosion particles
            this.particles.forEach(particle => particle.draw(ctx));
        }
        
        explode() {
            this.exploded = true;
            
            // Create explosion particles in a perfect sphere
            const baseLifespan = 3 + Math.random() * 3; // 3-6 seconds (increased from 2-4)
            
            // Create particles in layers for a more perfect sphere
            // Reduce number of layers for better performance
            const layers = Math.min(15, Math.max(8, Math.floor(this.particleCount / 100)));
            
            // Calculate total particles to create based on performance
            const totalParticles = Math.min(this.particleCount, 1000);
            
            // Get the shape function
            const shapeFunction = shapes[this.shape];
            
            // Create particles in the selected shape
            for (let layer = 0; layer < layers; layer++) {
                const particlesInLayer = Math.max(1, Math.floor(totalParticles / layers));
                
                for (let i = 0; i < particlesInLayer; i++) {
                    const angle = (i / particlesInLayer) * TWO_PI;
                    
                    // Get position from shape function
                    const position = shapeFunction(angle, layer, layers);
                    
                    // Increase explosion speed to create larger fireworks
                    const speed = 15 + Math.random() * this.shellSize * 0.3;
                    
                    // Calculate velocities based on shape position
                    const vx = position.x * speed;
                    const vy = position.y * speed;
                    
                    // Add some randomness for a more natural look
                    const randomFactor = 0.1;
                    const randomVx = vx * (1 + (Math.random() - 0.5) * randomFactor);
                    const randomVy = vy * (1 + (Math.random() - 0.5) * randomFactor);
                    
                    // Create particle with delay for sequential explosion effect
                    const delay = Math.random() * 0.1; // Small random delay for more natural look
                    
                    this.particles.push(new Particle(
                        this.x,
                        this.y,
                        Math.random() * 2 + 1.5, // Slightly larger particles
                        this.colorTransitions[0],
                        { x: randomVx, y: randomVy },
                        this.gravity * 0.2, // Reduced gravity for slower fall and larger appearance
                        0.985, // Increased air resistance for slower movement
                        0.01, // Fade rate
                        this.colorTransitions,
                        baseLifespan * (0.8 + Math.random() * 0.4), // Slight variation in lifespan
                        delay
                    ));
                }
            }
            
            // Add a bright flash at the center - reduce number for better performance
            for (let i = 0; i < 15; i++) {
                this.particles.push(new Particle(
                    this.x,
                    this.y,
                    Math.random() * 8 + 5, // Larger flash particles
                    '#ffffff',
                    { 
                        x: (Math.random() - 0.5) * 5, 
                        y: (Math.random() - 0.5) * 5
                    },
                    this.gravity * 0.1,
                    0.9,
                    0.2,
                    ['#ffffff', '#ffff88'],
                    0.5 // Longer flash duration
                ));
            }
        }
        
        isFinished() {
            return this.exploded && this.particles.length === 0;
        }
    }
    
    // Animation variables
    let fireworks = [];
    let lastTimestamp = 0;
    let autoLaunchTimer = 0;
    let frameCount = 0;
    let fpsTime = 0;
    let fps = 0;
    
    // Launch a new firework
    function launchFirework() {
        const x = Math.random() * canvas.width;
        const y = canvas.height;
        // Make fireworks reach much higher - target the top 10% of the screen
        const targetY = Math.random() * canvas.height * 0.3; // Target top 30% of screen
        
        const particleCount = parseInt(particleCountSlider.value);
        const shellSize = parseInt(shellSizeSlider.value);
        const colorTransitions = parseInt(colorTransitionsSlider.value);
        
        fireworks.push(new Firework(x, y, targetY, particleCount, shellSize, colorTransitions));
    }
    
    // Animation loop with performance optimizations
    function animate(timestamp) {
        // Calculate delta time in seconds
        const deltaTime = Math.min((timestamp - lastTimestamp) / 1000, 0.05); // Cap delta time to prevent large jumps
        lastTimestamp = timestamp;
        
        // FPS calculation
        frameCount++;
        fpsTime += deltaTime;
        if (fpsTime >= 1) {
            fps = Math.round(frameCount / fpsTime);
            frameCount = 0;
            fpsTime = 0;
            
            // Adjust particle count based on FPS for automatic performance optimization
            if (fps < 30 && parseInt(particleCountSlider.value) > 400) {
                particleCountSlider.value = parseInt(particleCountSlider.value) * 0.8;
                particleCountValue.textContent = particleCountSlider.value;
            }
        }
        
        // Clear canvas with semi-transparent black for trail effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw fireworks
        fireworks = fireworks.filter(firework => {
            firework.update(deltaTime);
            firework.draw(ctx);
            return !firework.isFinished();
        });
        
        // Auto-launch fireworks - limit number of fireworks for better performance
        autoLaunchTimer -= deltaTime;
        if (autoLaunchTimer <= 0 && fireworks.length < 3) {
            launchFirework();
            autoLaunchTimer = 2 + Math.random() * 2; // Launch less frequently
        }
        
        requestAnimationFrame(animate);
    }
    
    // Event listeners
    launchBtn.addEventListener('click', launchFirework);
    
    // Click on canvas to launch fireworks
    canvas.addEventListener('click', (e) => {
        const x = e.clientX;
        const targetY = e.clientY;
        const y = canvas.height;
        
        const particleCount = parseInt(particleCountSlider.value);
        const shellSize = parseInt(shellSizeSlider.value);
        const colorTransitions = parseInt(colorTransitionsSlider.value);
        
        fireworks.push(new Firework(x, y, targetY, particleCount, shellSize, colorTransitions));
    });
    
    // Start animation
    requestAnimationFrame(animate);
    
    // Launch initial firework
    setTimeout(launchFirework, 1000);
}); 