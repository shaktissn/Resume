document.addEventListener('DOMContentLoaded', function() {
  
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        
        if(window.getComputedStyle(document.querySelector('.nav-toggle')).display !== 'none'){
          document.querySelector('.nav-links').style.display = 'none';
        }
      }
    })
  });

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  toggle && toggle.addEventListener('click', ()=>{
    if(getComputedStyle(links).display === 'flex') links.style.display = 'none';
    else links.style.display = 'flex';
  });

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('reveal');
    })
  }, {threshold:0.12});
  document.querySelectorAll('.panel, .card, .hero-inner').forEach(el=>observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("profileImageInput");
  const preview = document.getElementById("profilePreview");
  let prevObjectUrl = null;

  if (!input || !preview) return;

  input.addEventListener("change", function (e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    if (prevObjectUrl) URL.revokeObjectURL(prevObjectUrl);
    prevObjectUrl = URL.createObjectURL(file);
    preview.src = prevObjectUrl;
  });
});
