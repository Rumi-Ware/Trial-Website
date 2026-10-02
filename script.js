// Mobile menu
const burger=document.querySelector('.burger'),menu=document.getElementById('menu');
burger.addEventListener('click',()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');burger.setAttribute('aria-expanded',false)}));

// Back to top button
const toTop=document.querySelector('.totop');
addEventListener('scroll',()=>{toTop.hidden=scrollY<600});
toTop.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

// Contact form: paste your Formspree link below (https://formspree.io/f/xxxx)
const FORM_URL='FORMSPREE_URL_HERE';
const form=document.getElementById('form'),statusEl=document.getElementById('status');
form.addEventListener('submit',async e=>{
  e.preventDefault();statusEl.className='';
  if(!form.elements.name.value.trim()||!/^\S+@\S+\.\S+$/.test(form.elements.email.value)||!form.elements.message.value.trim()){
    statusEl.textContent='Please enter your name, a valid email and a message.';statusEl.className='err';return}
  if(FORM_URL.includes('FORMSPREE_URL_HERE')){statusEl.textContent='Form is not connected yet. Add your Formspree link in script.js.';statusEl.className='err';return}
  statusEl.textContent='Sending...';
  try{
    const r=await fetch(FORM_URL,{method:'POST',headers:{Accept:'application/json'},body:new FormData(form)});
    if(r.ok){form.reset();statusEl.textContent='Thank you. We received your message and will reply soon.';statusEl.className='ok'}
    else throw 0;
  }catch{statusEl.textContent='Could not send. Please use WhatsApp or email instead.';statusEl.className='err'}
});
document.getElementById('yr').textContent=new Date().getFullYear();
