// ========== Rellax Parallax ==========
new Rellax('.rellax');

// ========== GSAP Animations ==========
gsap.from('.hero-content', {
  opacity: 0,
  y: -50,
  duration: 1.5,
  delay: 0.5,
  ease: "power3.out"
});

gsap.from('.section-title', {
  scrollTrigger: {
    trigger: '.section-title',
    start: 'top 90%',
  },
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});

// ========== Barba Transitions ==========
barba.init({
  transitions: [{
    name: 'fade',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0,
        duration: 0.5
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0,
        duration: 0.5
      });
    }
  }]
});

// ========== Anime.js Hover Animations ==========
anime({
  targets: '.blog-card',
  scale: [0.95, 1],
  delay: anime.stagger(200, {start: 800}),
  duration: 1000,
  easing: 'easeOutElastic(1, .8)'
});

// ========== Three.js Background ==========
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-bg'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.SphereGeometry(0.5, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xb388ff, wireframe: true });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 2;

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
