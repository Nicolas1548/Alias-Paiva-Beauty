const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in-view'); }
    });
  }, { threshold:0.15 });

  document.querySelectorAll('.reveal, .lash-divider').forEach(el=>observer.observe(el));
