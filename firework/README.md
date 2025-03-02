# Japanese Chrysanthemum Fireworks Simulation

This is a realistic simulation of Japanese Chrysanthemum fireworks (千輪煙火), focusing on creating perfect spherical explosions with multiple color transitions.

## Features

- **Perfect Spherical Explosions**: Uses a layered particle system to create perfectly spherical firework explosions
- **Multiple Color Transitions**: Each firework can transition through up to 10 different colors during its lifecycle
- **Realistic Physics**: Includes gravity, air resistance, and particle aging effects
- **Interactive Controls**: Adjust particle count, shell size, and color transitions in real-time
- **Click-to-Launch**: Click anywhere on the screen to launch a firework to that height

## How to Use

1. Open `index.html` in a modern web browser
2. Use the slider controls to adjust:
   - **Particle Count**: More particles create denser, more spectacular fireworks (but may affect performance)
   - **Shell Size**: Larger shells create bigger explosions
   - **Color Transitions**: More transitions create more complex color patterns
3. Click the "Launch Firework" button to launch a random firework
4. Click anywhere on the canvas to launch a firework to that specific height

## Technical Details

The simulation uses several techniques to achieve realistic fireworks:

- **Layered Sphere Generation**: Creates particles in concentric layers to form a perfect sphere
- **Color Interpolation**: Smoothly transitions between colors over the firework's lifespan
- **Particle Physics**: Each particle has its own velocity, gravity, and air resistance
- **Glow Effects**: Uses radial gradients to create realistic light bloom

## Performance Tips

If the simulation runs slowly on your device, try:
- Reducing the particle count
- Launching fewer fireworks simultaneously
- Using a more powerful device or browser

## Browser Compatibility

This simulation works best in modern browsers with good Canvas support:
- Chrome
- Firefox
- Safari
- Edge

## Credits

Created as a demonstration of realistic firework physics and rendering techniques. 