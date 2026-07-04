// Premium 3D Parallax Matrix Rain Background Animation
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('matrix-bg');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Authentic Matrix characters (Katakana, digits, alphabet)
    const alphabet = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    class MatrixColumn {
        constructor(x) {
            this.x = x;
            this.reset();
            // Randomize initial vertical offset so they start staggered across the screen
            this.y = Math.random() * (height + this.length * this.fontSize * 2) - this.length * this.fontSize;
        }
        
        reset() {
            // Layer-based depth: 0 = background, 1 = midground, 2 = foreground
            const depth = Math.floor(Math.random() * 3);
            
            if (depth === 0) {
                // Background layer (farthest, smallest, slowest, dimmest)
                this.fontSize = Math.floor(Math.random() * 3) + 8; // 8px to 10px
                this.speed = Math.random() * 0.4 + 0.5;           // 0.5 to 0.9 px/frame
                this.opacityMultiplier = (Math.random() * 0.05 + 0.03) * 0.6; // Reduced by 40%
                this.glow = false;
            } else if (depth === 1) {
                // Midground layer
                this.fontSize = Math.floor(Math.random() * 4) + 11; // 11px to 14px
                this.speed = Math.random() * 1.0 + 1.2;            // 1.2 to 2.2 px/frame
                this.opacityMultiplier = (Math.random() * 0.12 + 0.08) * 0.6; // Reduced by 40%
                this.glow = false;
            } else {
                // Foreground layer (largest, fastest, brightest, glowing)
                this.fontSize = Math.floor(Math.random() * 4) + 15; // 15px to 18px
                this.speed = Math.random() * 1.8 + 2.4;            // 2.4 to 4.2 px/frame
                this.opacityMultiplier = (Math.random() * 0.22 + 0.18) * 0.6; // Reduced by 40%
                this.glow = true;
            }
            
            this.length = Math.floor(Math.random() * 15) + 10;     // 10 to 25 characters long
            this.y = -this.length * this.fontSize;                // Start above screen
            
            this.chars = [];
            for (let i = 0; i < this.length; i++) {
                this.chars.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
            }
        }
        
        update() {
            this.y += this.speed;
            
            // Slowly morph characters inside the falling stream (1.5% chance per frame)
            for (let i = 0; i < this.chars.length; i++) {
                if (Math.random() < 0.015) {
                    this.chars[i] = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                }
            }
            
            // Reset stream once it falls completely off the bottom
            if (this.y - this.length * this.fontSize > height) {
                this.reset();
            }
        }
        
        draw(isDark) {
            ctx.font = `600 ${this.fontSize}px monospace`;
            
            for (let j = 0; j < this.length; j++) {
                const charY = this.y - j * this.fontSize;
                
                // Do not render characters off-screen
                if (charY < -this.fontSize || charY > height + this.fontSize) {
                    continue;
                }
                
                // Alpha fades out along the tail length
                let alpha = (1 - j / this.length) * this.opacityMultiplier;
                
                // Fainter streams in light mode to keep text highly legible
                if (!isDark) {
                    alpha = alpha * 0.5;
                }
                
                if (j === 0) {
                    // Stream Head: Crisp white with glowing shadow
                    ctx.fillStyle = isDark ? `rgba(255, 255, 255, ${Math.min(alpha * 3, 0.95)})` : `rgba(255, 255, 255, ${Math.min(alpha * 2, 0.85)})`;
                    if (this.glow && isDark) {
                        ctx.shadowColor = '#10b981';
                        ctx.shadowBlur = 8;
                    } else {
                        ctx.shadowBlur = 0;
                    }
                } else if (j === 1) {
                    // Light green head follower
                    ctx.fillStyle = isDark ? `rgba(167, 243, 208, ${alpha * 1.5})` : `rgba(52, 211, 153, ${alpha * 1.2})`;
                    ctx.shadowBlur = 0;
                } else {
                    // Fading green tail
                    ctx.fillStyle = isDark ? `rgba(16, 185, 129, ${alpha})` : `rgba(5, 150, 105, ${alpha})`;
                    ctx.shadowBlur = 0;
                }
                
                ctx.fillText(this.chars[j], this.x, charY);
            }
            ctx.shadowBlur = 0;
        }
    }
    
    const columnGap = 11;
    let columnsCount = Math.floor(width / columnGap);
    let columnsList = [];
    
    function initColumns() {
        columnsList = [];
        for (let i = 0; i < columnsCount; i++) {
            columnsList.push(new MatrixColumn(i * columnGap));
        }
    }
    initColumns();
    
    let lastTime = 0;
    const fps = 24; // 24 FPS is authentic and keeps CPU usage minimal
    const interval = 1000 / fps;
    
    function draw(timestamp) {
        requestAnimationFrame(draw);
        
        const elapsed = timestamp - lastTime;
        if (elapsed < interval) return;
        lastTime = timestamp - (elapsed % interval);
        
        // Clear canvas completely to keep background transparent
        ctx.clearRect(0, 0, width, height);
        
        const isDark = document.documentElement.classList.contains('dark');
        
        // Update and draw columns
        for (let i = 0; i < columnsList.length; i++) {
            columnsList[i].update();
            columnsList[i].draw(isDark);
        }
    }
    
    requestAnimationFrame((time) => {
        lastTime = time;
        draw(time);
    });
    
    // Handle window resizing dynamically
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        const newColumnsCount = Math.floor(width / columnGap);
        
        if (newColumnsCount > columnsCount) {
            for (let i = columnsCount; i < newColumnsCount; i++) {
                columnsList.push(new MatrixColumn(i * columnGap));
            }
        } else if (newColumnsCount < columnsCount) {
            columnsList = columnsList.slice(0, newColumnsCount);
        }
        columnsCount = newColumnsCount;
    });
});
