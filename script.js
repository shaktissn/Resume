// script.js - small interactive bits: smooth scroll, mobile nav toggle, simple reveal
document.addEventListener('DOMContentLoaded', function() {
  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // close mobile nav if open
        if(window.getComputedStyle(document.querySelector('.nav-toggle')).display !== 'none'){
          document.querySelector('.nav-links').style.display = 'none';
        }
      }
    })
  });

  // mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  toggle && toggle.addEventListener('click', ()=>{
    if(getComputedStyle(links).display === 'flex') links.style.display = 'none';
    else links.style.display = 'flex';
  });

  // simple reveal on scroll
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('reveal');
    })
  }, {threshold:0.12});
  document.querySelectorAll('.panel, .card, .hero-inner').forEach(el=>observer.observe(el));
});
