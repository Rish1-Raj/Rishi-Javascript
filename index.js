window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const fields = ['name','email','mobile','age','address'];
  
    const showError = id => document.getElementById(id+'Error').style.display = 'block';
    const hideError = id => document.getElementById(id+'Error').style.display = 'none';
    const isEmpty = v => v.trim()==='';
    const inRange = (v,m,M) => { let n=Number(v); return n>=m && n<=M; };
  
    form.addEventListener('submit', e => {
      e.preventDefault(); let ok=true;
      fields.forEach(f => {
        hideError(f);
        const val = document.getElementById(f).value;
        if (f==='age') {
          if (isEmpty(val)||!inRange(val,1,10)) { showError(f); ok=false; }
        } else if (isEmpty(val)) { showError(f); ok=false; }
        if (f==='email' && val && !document.getElementById(f).validity.valid) { showError(f); ok=false; }
        if (f==='mobile' && val && val.trim().length!==10) { showError(f); ok=false; }
      });
      if (ok) { document.getElementById('successMessage').textContent = 'Form submitted successfully!'; form.reset(); }
    });
  
    document.getElementById('themeToggle').addEventListener('click', function(){
      document.body.classList.toggle('dark-mode');
      this.textContent=document.body.classList.contains('dark-mode')
        ? ' Light Mode' : 'Dark Mode';
    });
  });