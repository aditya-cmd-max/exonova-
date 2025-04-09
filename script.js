// Rellax.js scroll animation
new Rellax('.rellax');

// Anime.js entry animation
anime({
  targets: '.headline',
  translateY: [-100, 0],
  opacity: [0, 1],
  duration: 1500,
  easing: 'easeOutExpo'
});

anime({
  targets: '.slogan',
  translateY: [50, 0],
  opacity: [0, 1],
  delay: 600,
  duration: 1000,
  easing: 'easeOutExpo'
});

anime({
  targets: '.anime-fade',
  opacity: [0, 1],
  translateX: [-100, 0],
  delay: 1000,
  duration: 1200,
  easing: 'easeOutExpo'
});

// Barba.js smooth page transition
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


// Animate testimonials & mission cards
anime({
  targets: '.mission-card, .testimonial',
  opacity: [0, 1],
  translateY: [50, 0],
  delay: anime.stagger(300),
  duration: 1000,
  easing: 'easeOutCubic'
});


<script>
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
</script>

