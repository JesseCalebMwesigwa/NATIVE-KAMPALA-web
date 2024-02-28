// Hamburger(navbar) menu
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')

if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}


  // Initialize ScrollReveal(Hero section)
  ScrollReveal().reveal('#hero h4, #hero h2, #hero p, #hero button', {
    duration: 1000,
    distance: '20px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
    interval: 200
  });

  // Initialize ScrollReveal(feature)
  ScrollReveal().reveal('#feature .fe-box', {
    duration: 1000,
    distance: '20px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
    interval: 200
  });

   // Initialize ScrollReveal(products)
   ScrollReveal().reveal('#product1 .pro', {
    duration: 1000,
    distance: '20px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
    interval: 200
  });

  // Initialize ScrollReveal(sm-banner)
  ScrollReveal().reveal('#sm-banner .banner-box, #sm-banner .banner-box2', {
    duration: 1000,
    distance: '20px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
    interval: 200
  });

  // Initialize ScrollReveal(banner3)
  ScrollReveal().reveal('#banner3 .banner-box', {
    duration: 1000,
    distance: '20px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
    interval: 200
  });


