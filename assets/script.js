/* =========================================================
   MERIT & MINT — shared script
   The PRODUCTS array below is your single source of truth.
   Edit names, prices, categories, descriptions, and details
   here and both the Home and Shop pages update automatically.
   ========================================================= */

const PRODUCTS = [
  {
    id:'lavender-liquid-soap', name:'Lavender Fields Liquid Soap', category:'Liquid Soap',
    price:'$16', tone:'tone-1', glyph:'L',
    desc:'A gentle, foaming liquid soap with lavender and glycerin.',
    long:'A gentle, plant-based liquid soap for face and body. Glycerin keeps the skin barrier comfortable while lavender leaves a soft, calming scent behind.',
    details:['Glycerin + lavender oil','Sulphate-free','For face & body','300ml pump bottle']
  },
  {
    id:'citrus-liquid-soap', name:'Citrus Grove Liquid Soap', category:'Liquid Soap',
    price:'$16', tone:'tone-3', glyph:'C',
    desc:'A bright, everyday liquid soap that rinses clean.',
    long:'A light, citrus-forward liquid soap that lathers easily and rinses without residue. Formulated to clean without over-drying daily-use skin.',
    details:['Citrus + neroli oil','pH-balanced','Fragrance-light option','300ml pump bottle']
  },
  {
    id:'aloe-hand-soap', name:'Aloe & Oat Hand Soap', category:'Hand Soap',
    price:'$12', tone:'tone-2', glyph:'A',
    desc:'A softening hand wash with aloe and colloidal oat.',
    long:'A mild foaming hand soap built for frequent washing. Aloe vera and colloidal oat protect against dryness so hands stay soft, not stripped.',
    details:['Aloe vera + colloidal oat','Kind to frequent washing','Fragrance-light','250ml pump bottle']
  },
  {
    id:'citrus-hand-soap', name:'Citrus Bloom Hand Soap', category:'Hand Soap',
    price:'$12', tone:'tone-1', glyph:'H',
    desc:'A bright, everyday hand wash that keeps hands soft.',
    long:'A gentle foaming hand wash with a fresh citrus-blossom scent. Glycerin and aloe protect against dryness from frequent washing.',
    details:['Citrus + neroli','Glycerin + aloe','Kind to hands','250ml pump bottle']
  },
  {
    id:'shea-almond-moisturizer', name:'Shea & Almond Moisturizer', category:'Moisturizer',
    price:'$26', tone:'tone-4', glyph:'M',
    desc:'A rich daily moisturizer for dry and normal skin.',
    long:'A creamy, fast-absorbing moisturizer built on shea butter and sweet almond oil. Softens and holds moisture through the day without feeling heavy.',
    details:['Shea butter + almond oil','Fast-absorbing','For dry / normal skin','200ml jar']
  },
  {
    id:'rosewater-moisturizer', name:'Rosewater Daily Moisturizer', category:'Moisturizer',
    price:'$28', tone:'tone-2', glyph:'R',
    desc:'A light, hydrating lotion with rosewater and aloe.',
    long:'A lightweight lotion for everyday hydration. Rosewater soothes, aloe hydrates, and the finish stays fresh under makeup or alone.',
    details:['Rosewater + aloe vera','Lightweight finish','For all skin types','200ml pump bottle']
  },
  {
    id:'rosemary-mint-shampoo', name:'Rosemary Mint Shampoo', category:'Shampoo',
    price:'$22', tone:'tone-1', glyph:'R',
    desc:'A cooling, clarifying wash that leaves hair light and refreshed.',
    long:'Sulphate-free and gently foaming. Rosemary and peppermint invigorate the scalp while a light conditioning base keeps hair soft and manageable.',
    details:['Sulphate & silicone free','Rosemary + peppermint','For all hair types','250ml recyclable bottle']
  },
  {
    id:'argan-shampoo', name:'Nourishing Argan Shampoo', category:'Shampoo',
    price:'$24', tone:'tone-2', glyph:'A',
    desc:'Argan and shea for dry, colour-treated, or textured hair.',
    long:'A richer, creamier formula that restores moisture to dry and colour-treated hair. Argan oil smooths, shea butter softens, and the wash rinses clean without weight.',
    details:['Argan oil + shea butter','Colour-safe','Deeply moisturising','250ml recyclable bottle']
  },
  {
    id:'rosemary-mint-conditioner', name:'Rosemary Mint Conditioner', category:'Conditioner',
    price:'$22', tone:'tone-3', glyph:'R',
    desc:'A lightweight conditioner that detangles without weighing hair down.',
    long:'Pairs with the Rosemary Mint Shampoo. A light conditioning rinse that smooths and detangles while keeping the scalp feeling clean, not coated.',
    details:['Lightweight formula','Rosemary + peppermint','For all hair types','250ml recyclable bottle']
  },
  {
    id:'argan-conditioner', name:'Nourishing Argan Conditioner', category:'Conditioner',
    price:'$24', tone:'tone-4', glyph:'A',
    desc:'A rich, deep-conditioning treatment for dry or textured hair.',
    long:'Pairs with the Nourishing Argan Shampoo. Argan oil and shea butter restore moisture and softness to dry, colour-treated, or textured hair.',
    details:['Argan oil + shea butter','Colour-safe','Deeply conditioning','250ml recyclable bottle']
  },
  {
    id:'lavender-shower-gel', name:'Lavender Milk Shower Gel', category:'Shower Gel',
    price:'$20', tone:'tone-1', glyph:'L',
    desc:'A creamy, calming wash with oat milk and lavender.',
    long:'A silky shower gel that lathers gently and rinses soft. Colloidal oat and lavender make it a quiet ritual for the end of the day.',
    details:['Oat milk + lavender','Soothing for dry skin','Sulphate-free','300ml recyclable bottle']
  },
  {
    id:'citrus-shower-gel', name:'Citrus Splash Shower Gel', category:'Shower Gel',
    price:'$20', tone:'tone-3', glyph:'C',
    desc:'A bright, energising gel wash for the morning shower.',
    long:'A citrus-forward shower gel that lathers well and rinses clean. A quick, energising wash to start the day without stripping the skin.',
    details:['Citrus + neroli','Energising scent','Sulphate-free','300ml recyclable bottle']
  }
];

/* -------- render a product card -------- */
function cardHTML(p){
  return `
  <article class="card" data-category="${p.category}" data-id="${p.id}" tabindex="0" role="button" aria-label="View ${p.name}">
    <div class="card-img ${p.tone}">
      <span class="card-cat">${p.category}</span>
      <span class="glyph">${p.glyph}</span>
    </div>
    <div class="card-body">
      <h3>${p.name}</h3>
      <p class="desc">${p.desc}</p>
      <div class="card-foot">
        <span class="card-price">${p.price}</span>
        <span class="card-enquire">Quick view</span>
      </div>
    </div>
  </article>`;
}

/* -------- render list into a grid element -------- */
function renderProducts(el, list){
  el.innerHTML = list.map(cardHTML).join('');
  el.querySelectorAll('.card').forEach(c=>{
    const open = ()=>openModal(c.dataset.id);
    c.addEventListener('click',open);
    c.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault();open();} });
  });
}

/* -------- quick-view modal -------- */
function openModal(id){
  const p = PRODUCTS.find(x=>x.id===id); if(!p) return;
  const m = document.getElementById('modal'); if(!m) return;
  m.querySelector('.modal-img').className = 'modal-img '+p.tone;
  m.querySelector('.modal-img .glyph').textContent = p.glyph;
  m.querySelector('[data-cat]').textContent = p.category;
  m.querySelector('[data-name]').textContent = p.name;
  m.querySelector('[data-price]').textContent = p.price;
  m.querySelector('[data-long]').textContent = p.long;
  m.querySelector('[data-details]').innerHTML = p.details.map(d=>`<li>${d}</li>`).join('');
  const enq = m.querySelector('[data-enquire]');
  enq.setAttribute('href','contact.html?product='+encodeURIComponent(p.name));
  m.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){
  const m=document.getElementById('modal'); if(!m) return;
  m.classList.remove('open'); document.body.style.overflow='';
}

/* -------- boot -------- */
document.addEventListener('DOMContentLoaded',()=>{

  /* mobile nav */
  const burger=document.querySelector('.burger');
  const links=document.querySelector('.nav-links');
  if(burger&&links){ burger.addEventListener('click',()=>links.classList.toggle('open')); }

  /* reveal on scroll */
  const io=new IntersectionObserver(es=>{
    es.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);} });
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  /* featured products (home) */
  const featured=document.getElementById('featured-grid');
  if(featured){ renderProducts(featured, PRODUCTS.slice(0,3)); }

  /* full shop */
  const shop=document.getElementById('shop-grid');
  if(shop){
    renderProducts(shop, PRODUCTS);
    const filters=document.querySelectorAll('.filter');
    filters.forEach(f=>f.addEventListener('click',()=>{
      filters.forEach(x=>x.classList.remove('active'));
      f.classList.add('active');
      const cat=f.dataset.filter;
      const list = cat==='All' ? PRODUCTS : PRODUCTS.filter(p=>p.category===cat);
      renderProducts(shop,list);
    }));
  }

  /* modal wiring */
  const modal=document.getElementById('modal');
  if(modal){
    modal.querySelector('.modal-close').addEventListener('click',closeModal);
    modal.addEventListener('click',e=>{ if(e.target===modal) closeModal(); });
    document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeModal(); });
  }

  /* contact: prefill product from ?product= */
  const params=new URLSearchParams(location.search);
  const prod=params.get('product');
  const msg=document.getElementById('message');
  if(prod&&msg){
    msg.value=`Hi, I'd like to enquire about: ${prod}.\n\n`;
    const subject=document.getElementById('subject');
    if(subject) subject.value='Product enquiry';
    msg.focus();
    msg.setSelectionRange(msg.value.length,msg.value.length);
  }

  /* contact form (front-end only — see note in contact.html) */
  const form=document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      if(!form.checkValidity()){ form.reportValidity(); return; }
      form.style.display='none';
      document.getElementById('form-success').classList.add('show');
    });
  }

  /* footer year + newsletter stub */
  const yr=document.getElementById('year'); if(yr) yr.textContent=new Date().getFullYear();
  const news=document.getElementById('news-form');
  if(news){ news.addEventListener('submit',e=>{ e.preventDefault(); news.innerHTML='<p style="padding:13px 14px;font-size:14px;color:var(--sage-deep)">Thank you — you\u2019re on the list.</p>'; }); }
});
