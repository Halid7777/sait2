let n=0;
function add(btn,name){
  n++;document.getElementById('cnt').textContent=n;
  btn.textContent='✓ Добавлено';btn.classList.add('added');
  showToast('🛒 '+name+' добавлен в корзину!');
  setTimeout(()=>{btn.textContent='В корзину';btn.classList.remove('added');},2200);
}
function fav(btn){
  const on=btn.textContent==='❤️';
  btn.textContent=on?'🤍':'❤️';
  showToast(on?'Убрано из избранного':'❤️ Добавлено в избранное');
}
function openCart(){showToast(n===0?'🛒 Корзина пуста — добавьте товары!':'🛒 В корзине: '+n+' товар(а)');}
function subscribe(){
  const v=document.getElementById('emailIn').value.trim();
  if(!v||!v.includes('@')){showToast('📧 Введите корректный email');return;}
  showToast('🎁 Готово! Скидка 10% отправлена на '+v);
  document.getElementById('emailIn').value='';
}
let tid;
function showToast(m){
  const t=document.getElementById('toast');
  t.textContent=m;t.classList.add('show');
  clearTimeout(tid);tid=setTimeout(()=>t.classList.remove('show'),3000);
}
const io=new IntersectionObserver(es=>{
  es.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.transition='opacity .5s ease, transform .5s ease';
      e.target.style.opacity='1';e.target.style.transform='translateY(0)';
      io.unobserve(e.target);
    }
  });
},{threshold:.08});
document.querySelectorAll('.pcard,.cat,.feat,.promo,.bc').forEach((el,i)=>{
  el.style.opacity='0';el.style.transform='translateY(18px)';
  el.style.transitionDelay=(i%4)*55+'ms';
  io.observe(el);
});