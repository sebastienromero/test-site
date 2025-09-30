// Theme toggle script
(function(){
  const STORAGE_KEY = 'pref-theme-mode';
  const btn = document.getElementById('themeToggle');
  const rootBody = document.body;

  function apply(mode){
    if(mode === 'sober') {
      rootBody.classList.add('theme-sober');
      btn.textContent = '🎨';
      btn.setAttribute('aria-label','Thème vibrant');
      btn.setAttribute('title','Basculer thème vibrant');
    } else {
      rootBody.classList.remove('theme-sober');
      btn.textContent = '🌗';
      btn.setAttribute('aria-label','Thème sobre');
      btn.setAttribute('title','Basculer thème sobre');
    }
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  if(saved){ apply(saved); }

  btn?.addEventListener('click', ()=>{
    const newMode = rootBody.classList.contains('theme-sober') ? 'vibrant' : 'sober';
    apply(newMode);
    localStorage.setItem(STORAGE_KEY, newMode);
  });
})();
