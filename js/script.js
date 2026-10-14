const products = [
 {id:1,name:"Kit 6 Cuecas Boxer Classic Microfibra Sem Costura",price:53.19,old:99.99,image:"https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=500&q=80",category:"Moda",description:"Kit demonstrativo de roupas confortáveis."},
 {id:2,name:"Tênis Casual Unissex Conforto",price:94.90,old:239.99,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",category:"Moda Esportes",description:"Tênis casual para uso diário."},
 {id:3,name:"Guarda-roupa Casal com portas e espelho",price:1089,old:1399,image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80",category:"Casa",description:"Móvel para quarto com acabamento moderno."},
 {id:4,name:"Máquina Barbeador Elétrico Recarregável",price:50.40,old:99.90,image:"https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=400&q=80",category:"Beleza Eletrônicos",description:"Aparelho elétrico de cuidados pessoais."},
 {id:5,name:"Tela Mangueirão Hexagonal 1,50 m",price:542.21,old:1019,image:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80",category:"Casa Ferramentas",description:"Produto demonstrativo para jardim e área rural."},
 {id:6,name:"Relógio casual moderno",price:139.90,old:199.90,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",category:"Acessórios Moda",description:"Relógio casual com visual moderno."},
 {id:7,name:"Fone de ouvido Bluetooth sem fio",price:129.90,old:199.90,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80",category:"Eletrônicos",description:"Fone sem fio demonstrativo."},
 {id:8,name:"Notebook para estudos e trabalho",price:2499,old:2999,image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",category:"Informática",description:"Notebook ilustrativo para estudos e tarefas diárias."},
 {id:9,name:"Smartphone tela ampla 128 GB",price:1199,old:1499,image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",category:"Eletrônicos",description:"Smartphone demonstrativo com armazenamento amplo."},
 {id:10,name:"Cadeira de escritório ergonômica",price:399.90,old:599.90,image:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=400&q=80",category:"Casa",description:"Cadeira para estudo e trabalho."},
 {id:11,name:"Controle sem fio para videogame",price:219.90,old:299.90,image:"https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=400&q=80",category:"Games",description:"Controle demonstrativo para jogos."},
 {id:12,name:"Bola de futebol tamanho oficial",price:89.90,old:129.90,image:"https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?auto=format&fit=crop&w=400&q=80",category:"Esportes",description:"Bola para recreação e treinos."},
 {id:13,name:"Liquidificador  blender 2 velocidades",price:119.90,old:179.90,image:"https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=400&q=80",category:"Eletrodomésticos",description:"Eletrodoméstico demonstrativo para cozinha."},
 {id:14,name:"Mochila para notebook e escola",price:79.90,old:139.90,image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80",category:"Acessórios Informática",description:"Mochila para uso escolar e diário."},
 {id:15,name:"Kit de ferramentas domésticas",price:149.90,old:229.90,image:"https://images.unsplash.com/photo-1581147036324-c1c89c2c8a63?auto=format&fit=crop&w=400&q=80",category:"Ferramentas",description:"Kit de ferramentas para pequenos reparos."},
 {id:16,name:"Luminária de mesa para estudos",price:59.90,old:99.90,image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80",category:"Casa",description:"Luminária para mesa de estudos."},
 {id:17,name:"Camiseta básica de algodão",price:39.90,old:69.90,image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",category:"Moda",description:"Camiseta casual demonstrativa."},
 {id:18,name:"Perfume amadeirado masculino",price:159.90,old:219.90,image:"https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=400&q=80",category:"Beleza",description:"Fragrância demonstrativa; produto fictício."},
 {id:19,name:"Monitor Full HD para computador",price:699.90,old:899.90,image:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80",category:"Informática",description:"Monitor demonstrativo para computador."},
 {id:20,name:"Teclado gamer com iluminação",price:169.90,old:249.90,image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80",category:"Games Informática",description:"Teclado ilustrativo para setup gamer."}
];

const coupons = {
  PRIMEIRACOMPRA:{type:"fixed",value:15,min:100,description:"R$ 15 de desconto em compras acima de R$ 100"},
  CASA10:{type:"percent",value:10,category:"Casa",description:"10% em produtos da categoria Casa"},
  TECH20:{type:"fixed",value:20,category:"Eletrônicos",description:"R$ 20 em produtos de Eletrônicos"}
};
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const money = n => n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
let cart = readStorage("ml-demo-cart", []);
let favorites = readStorage("ml-demo-favs", []);
let activeCoupon = localStorage.getItem("ml-demo-coupon") || "";
let currentResults = [...products];
let toastTimer;
let carouselOffset = 0;

function readStorage(key, fallback){try{return JSON.parse(localStorage.getItem(key)) ?? fallback}catch{return fallback}}
function toast(message){const el=$("#toast");if(!el)return;el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2600)}
function saveCart(){localStorage.setItem("ml-demo-cart",JSON.stringify(cart));updateCartCount()}
function updateCartCount(){const count=cart.reduce((s,i)=>s+i.qty,0);if($("#cartCount"))$("#cartCount").textContent=count}
function openModal(content){$("#modalContent").innerHTML=content;$("#modalBackdrop").classList.remove("hidden");document.body.style.overflow="hidden"}
function closeModal(){$("#modalBackdrop").classList.add("hidden");document.body.style.overflow=""}
function productById(id){return products.find(p=>p.id===Number(id))}
function addToCart(id){const p=productById(id);if(!p)return;const item=cart.find(i=>i.id===p.id);if(item)item.qty++;else cart.push({id:p.id,qty:1});saveCart();toast(`${p.name} adicionado ao carrinho`)}
function toggleFavorite(id){id=Number(id);favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];localStorage.setItem("ml-demo-favs",JSON.stringify(favorites));$$(`[data-favorite="${id}"]`).forEach(b=>{b.classList.toggle("is-favorite",favorites.includes(id));b.textContent=favorites.includes(id)?"♥":"♡"});toast(favorites.includes(id)?"Produto salvo nos favoritos":"Produto removido dos favoritos")}
function productCard(p){return `<article class="product-card"><button class="product-image" data-product="${p.id}" aria-label="Ver ${p.name}"><img src="${p.image}" alt="${p.name}" loading="lazy"></button><button class="favorite ${favorites.includes(p.id)?"is-favorite":""}" data-favorite="${p.id}" aria-label="Favoritar produto">${favorites.includes(p.id)?"♥":"♡"}</button><p class="product-name">${p.name}</p><span class="discount">${Math.max(1,Math.round((1-p.price/p.old)*100))}% OFF</span> <del>${money(p.old)}</del><p class="price">${money(p.price)}</p><p class="pix">no Pix</p><small class="muted">Frete grátis em produtos selecionados</small><button class="add-cart" data-add="${p.id}">Adicionar ao carrinho</button></article>`}
function renderResults(items,title){currentResults=[...items];$("#resultsTitle").textContent=title;$("#resultsCount").textContent=`${items.length} produto(s) encontrado(s)`;$("#resultsToolbar").classList.remove("hidden");$("#searchResults").classList.remove("hidden");$("#dealsSection").classList.add("hidden");$("#resultsGrid").innerHTML=items.length?items.map(productCard).join(""):"<div class='empty-state'>Nenhum produto encontrado. Tente outra busca ou categoria.</div>";$("#resultsToolbar").scrollIntoView({behavior:"smooth",block:"start"})}
function searchProducts(query){const q=query.trim().toLocaleLowerCase("pt-BR");const results=products.filter(p=>(p.name+" "+p.category+" "+p.description).toLocaleLowerCase("pt-BR").includes(q));renderResults(results,q?`Resultados para “${query}”`:"Todos os produtos")}
function resetSearch(){$("#searchInput").value="";$("#resultsToolbar").classList.add("hidden");$("#searchResults").classList.add("hidden");$("#dealsSection").classList.remove("hidden");currentResults=[...products];}
function sortResults(value){if(value==="low")currentResults.sort((a,b)=>a.price-b.price);else if(value==="high")currentResults.sort((a,b)=>b.price-a.price);else currentResults.sort((a,b)=>a.id-b.id);$("#resultsGrid").innerHTML=currentResults.length?currentResults.map(productCard).join(""):"<div class='empty-state'>Nenhum produto encontrado.</div>"}
function filterCategory(category){$$("[data-category-filter]").forEach(b=>b.classList.toggle("active",b.dataset.categoryFilter===category));$("#categoryDrawer").classList.add("hidden");const items=category==="Todos"?products:products.filter(p=>p.category.toLocaleLowerCase("pt-BR").includes(category.toLocaleLowerCase("pt-BR")));renderResults(items,category==="Todos"?"Todos os produtos":category)}
function showProduct(id){const p=productById(id);if(!p)return;openModal(`<h2 id="modalTitle">${p.name}</h2><div class="modal-product"><img src="${p.image}" alt="${p.name}"><div><span class="discount">${Math.max(1,Math.round((1-p.price/p.old)*100))}% OFF</span><p class="price">${money(p.price)}</p><del>${money(p.old)}</del><p class="pix">Frete grátis em produtos selecionados</p><small class="muted">Categoria: ${p.category}</small></div></div><p>${p.description}</p><p class="muted">Produto demonstrativo. Nenhuma compra real é realizada.</p><button class="primary-btn" data-add="${p.id}">Adicionar ao carrinho</button><button class="secondary-btn" data-favorite="${p.id}">${favorites.includes(p.id)?"♥ Remover dos favoritos":"♡ Adicionar aos favoritos"}</button>`)}
function couponDiscount(subtotal){if(!activeCoupon||!coupons[activeCoupon])return 0;const c=coupons[activeCoupon];if(c.min&&subtotal<c.min)return 0;const eligible=cart.map(i=>({p:productById(i.id),qty:i.qty})).filter(i=>i.p&&(!c.category||i.p.category.toLowerCase().includes(c.category.toLowerCase()))).reduce((s,i)=>s+i.p.price*i.qty,0);return Math.min(subtotal,c.type==="percent"?eligible*c.value/100:(eligible>0?c.value:0))}
function showCart(){const lines=cart.map(item=>{const p=productById(item.id);if(!p)return "";return `<div class="cart-line"><div><strong>${p.name}</strong><span>${money(p.price)} cada</span><div class="cart-controls"><button data-qty="${p.id}" data-delta="-1" aria-label="Diminuir quantidade">−</button><b>${item.qty}</b><button data-qty="${p.id}" data-delta="1" aria-label="Aumentar quantidade">+</button></div></div><div><b>${money(p.price*item.qty)}</b><br><button data-remove="${p.id}">Remover</button></div></div>`}).join("");const subtotal=cart.reduce((s,i)=>s+(productById(i.id)?.price||0)*i.qty,0),discount=couponDiscount(subtotal);openModal(`<h2 id="modalTitle">Seu carrinho</h2>${lines||"<p>Seu carrinho está vazio. Explore as categorias e ofertas.</p>"}<div class="coupon-summary">${activeCoupon?`Cupom ativo: <b>${activeCoupon}</b> — desconto ${money(discount)} <button id="removeCoupon" class="text-button">Remover cupom</button>`:"Ative um cupom na página inicial para tentar economizar."}</div><div class="total-line"><span>Subtotal</span><span>${money(subtotal)}</span></div><div class="total-line"><span>Desconto</span><span>− ${money(discount)}</span></div><div class="total-line"><span>Total</span><span>${money(Math.max(0,subtotal-discount))}</span></div><p class="muted">Checkout demonstrativo: nenhum pagamento será realizado.</p><button class="primary-btn" id="checkoutBtn" ${cart.length?"":"disabled"}>Continuar compra</button><button class="secondary-btn" id="keepShopping">Continuar comprando</button>`)}
function showLogin(register=false){openModal(`<h2 id="modalTitle">${register?"Crie sua conta demonstrativa":"Entre na sua conta demonstrativa"}</h2><p>Protótipo local. Não informe senhas reais.</p><form id="demoLogin"><label>E-mail<input required name="email" type="email" placeholder="exemplo@email.com"></label>${register?'<label>Nome<input required name="name" placeholder="Seu nome"></label>':""}<label>Senha demonstrativa<input required name="password" type="password" placeholder="Digite uma senha fictícia"></label><button class="primary-btn" type="submit">${register?"Criar conta de demonstração":"Entrar"}</button></form><button class="secondary-btn" id="switchAccount">${register?"Já tenho uma conta":"Criar conta de demonstração"}</button>`)}
function showCookieSettings(){openModal(`<h2 id="modalTitle">Configurações de cookies</h2><p>Gerencie as preferências deste protótipo.</p><div class="cookie-options"><span>Cookies essenciais</span><input type="checkbox" checked disabled></div><div class="cookie-options"><span>Preferências</span><input type="checkbox" id="prefCookies" checked></div><div class="cookie-options"><span>Estatísticas</span><input type="checkbox" id="statsCookies"></div><button class="primary-btn" id="saveCookies">Salvar preferências</button>`)}

let offersCategory = "Todos";
let offersPageNumber = 1;
let offersSortMode = "featured";
function openOffersPage(category="Todos"){
  document.body.classList.add("offers-page-active");
  $("#offersPage").classList.remove("hidden");
  offersCategory=category;
  offersPageNumber=1;
  $$(".offer-tab").forEach(b=>b.classList.toggle("active",b.dataset.offerFilter===category));
  renderOffersPage();
  window.scrollTo({top:0,behavior:"smooth"});
}
function closeOffersPage(){
  document.body.classList.remove("offers-page-active");
  $("#offersPage").classList.add("hidden");
  resetSearch();
  window.scrollTo({top:0,behavior:"smooth"});
}
function getOfferProducts(){
  let list=[...products];
  if(offersCategory==="Relâmpago") list=list.filter(p=>p.price<180);
  else if(offersCategory==="Preços baixos") list=list.filter(p=>p.price<300);
  else if(offersCategory==="Outlet") list=list.filter(p=>Number(((1-p.price/p.old)*100).toFixed(0))>=35);
  else if(offersCategory==="Eletrônicos") list=list.filter(p=>/eletrônicos/i.test(p.category));
  else if(offersCategory==="Informática") list=list.filter(p=>/informática/i.test(p.category));
  else if(offersCategory==="Moda") list=list.filter(p=>/moda/i.test(p.category));
  if(offersSortMode==="low")list.sort((a,b)=>a.price-b.price);
  else if(offersSortMode==="high")list.sort((a,b)=>b.price-a.price);
  return list;
}
function renderOffersPage(){
  const list=getOfferProducts(), pageSize=9, totalPages=Math.max(1,Math.ceil(list.length/pageSize));
  offersPageNumber=Math.min(offersPageNumber,totalPages);
  $("#offersFilterTitle").textContent=offersCategory==="Todos"?"Todas":offersCategory;
  const visible=list.slice((offersPageNumber-1)*pageSize,offersPageNumber*pageSize);
  $("#offersGrid").innerHTML=visible.length?visible.map(productCard).join(""):"<div class='empty-state'>Não há produtos nesta seleção. Escolha outra categoria.</div>";
  const pagination=$("#offersPagination");
  pagination.innerHTML=`<button data-offer-page="${Math.max(1,offersPageNumber-1)}" ${offersPageNumber===1?"disabled":""}>‹ Anterior</button>`+
    Array.from({length:totalPages},(_,i)=>`<button data-offer-page="${i+1}" class="${offersPageNumber===i+1?"active":""}">${i+1}</button>`).join("")+
    `<button data-offer-page="${Math.min(totalPages,offersPageNumber+1)}" ${offersPageNumber===totalPages?"disabled":""}>Seguinte ›</button>`;
}
function openAccountScreen(){
  $("#accountScreen").classList.remove("hidden");
  document.body.classList.add("account-page-active");
  $("#signupForm").reset();
}
function closeAccountScreen(){
  $("#accountScreen").classList.add("hidden");
  document.body.classList.remove("account-page-active");
}

function showSection(name){const key=name.toLocaleLowerCase("pt-BR");if(key==="categorias"){$("#categoryDrawer").classList.toggle("hidden");$("#categoryDrawer").scrollIntoView({behavior:"smooth",block:"nearest"});return}if(key==="cupons"){$("#couponStrip").scrollIntoView({behavior:"smooth"});toast("Escolha um cupom para ativar");return}if(key==="ofertas"){openOffersPage("Todos");return}if(key==="mais vendidos"){renderResults([...products].sort((a,b)=>b.id-a.id).slice(0,10),"Mais vendidos");return}if(key==="moda"||key==="eletrônicos"||key==="eletronicos"||key==="casa"||key==="esportes"||key==="games"||key==="informática"||key==="informatica"){const map={"eletronicos":"Eletrônicos","informática":"Informática"};filterCategory(map[key]||name);return}if(key==="frete grátis"){renderResults(products.filter(p=>p.price<200),"Produtos com frete grátis demonstrativo");return}if(key==="até 100"){renderResults(products.filter(p=>p.price<100),"Produtos por menos de R$ 100");return}if(key==="pagamento"){openModal(`<h2 id="modalTitle">Meios de pagamento</h2><p>Esta reprodução apresenta apenas uma demonstração visual das opções de pagamento.</p><div class="payment-method">💳 Cartão de crédito <span>Parcelamento demonstrativo</span></div><div class="payment-method">⚡ Pix <span>Pagamento instantâneo demonstrativo</span></div><div class="payment-method">🧾 Boleto <span>Não será gerado boleto real</span></div>`);return}if(key==="entretenimento"||key==="mercado play"){openModal(`<h2 id="modalTitle">Mercado Play</h2><div class="play-modal-art">▶</div><p>Área demonstrativa de entretenimento. Os vídeos não estão conectados a um catálogo real.</p><button class="primary-btn" id="playInfo">Ver conteúdo disponível</button>`);return}if(key==="vender"){openModal(`<h2 id="modalTitle">Comece a vender</h2><p>Simulação de cadastro de vendedor.</p><form id="sellerForm"><label>Nome da loja<input required placeholder="Minha loja"></label><label>Categoria<select required><option value="">Selecione</option><option>Eletrônicos</option><option>Moda</option><option>Casa</option><option>Outros</option></select></label><button class="primary-btn" type="submit">Criar loja demonstrativa</button></form>`);return}if(key==="contato"||key==="ajuda"){openModal(`<h2 id="modalTitle">Central de ajuda</h2><p>Envie uma mensagem demonstrativa. Ela não será encaminhada para o Mercado Livre real.</p><form id="contactForm"><label>Assunto<select><option>Pedido e entrega</option><option>Conta</option><option>Produto</option><option>Outro assunto</option></select></label><label>Mensagem<textarea name="message" rows="4" required placeholder="Como podemos ajudar?"></textarea></label><button class="primary-btn" type="submit">Enviar mensagem</button></form>`);return}if(key==="supermercado"){renderResults(products.filter(p=>/casa|eletrodomésticos/i.test(p.category)),"Supermercado e utilidades — demonstração");return}if(key==="trabalhe conosco"||key==="termos e condições"||key==="acessibilidade"){openModal(`<h2 id="modalTitle">${name}</h2><p>Informações demonstrativas desta reprodução educacional.</p>`);return}toast(`Seção ${name} aberta`)}
function showFavorites(){renderResults(products.filter(p=>favorites.includes(p.id)),"Meus favoritos")}
function nextProducts(){const track=$("#productTrack");if(!track)return;const cards=[...track.children];if(cards.length<2)return;carouselOffset=(carouselOffset+1)%cards.length;track.scrollTo({left:cards[carouselOffset].offsetLeft-track.offsetLeft,behavior:"smooth"})}

document.addEventListener("click",e=>{
 const add=e.target.closest("[data-add]");if(add){e.preventDefault();addToCart(add.dataset.add);return}
 const prod=e.target.closest("[data-product]");if(prod){showProduct(prod.dataset.product);return}
 const fav=e.target.closest("[data-favorite]");if(fav){e.preventDefault();toggleFavorite(fav.dataset.favorite);return}
 const qty=e.target.closest("[data-qty]");if(qty){const item=cart.find(i=>i.id===Number(qty.dataset.qty));if(item){item.qty+=Number(qty.dataset.delta);if(item.qty<=0)cart=cart.filter(i=>i!==item);saveCart();showCart()}return}
 const remove=e.target.closest("[data-remove]");if(remove){cart=cart.filter(i=>i.id!==Number(remove.dataset.remove));saveCart();showCart();return}
 const shortcut=e.target.closest("[data-shortcut]");if(shortcut){showSection(shortcut.dataset.shortcut);return}
 const nav=e.target.closest("[data-category]");if(nav){e.preventDefault();showSection(nav.dataset.category);return}
 const cat=e.target.closest("[data-category-filter]");if(cat){filterCategory(cat.dataset.categoryFilter);return}
 const coupon=e.target.closest("[data-coupon]");if(coupon){activeCoupon=coupon.dataset.coupon;localStorage.setItem("ml-demo-coupon",activeCoupon);$$("[data-coupon]").forEach(b=>{b.classList.toggle("activated",b.dataset.coupon===activeCoupon);b.textContent=b.dataset.coupon===activeCoupon?"Cupom ativado ✓":"Ativar cupom"});toast(`Cupom ${activeCoupon} ativado`);return}
});
$(".brand").addEventListener("click",e=>{e.preventDefault();resetSearch();window.scrollTo({top:0,behavior:"smooth"});toast("Página inicial")});
$("#searchForm").addEventListener("submit",e=>{e.preventDefault();searchProducts($("#searchInput").value)});
$("#searchInput").addEventListener("keydown",e=>{if(e.key==="Escape")resetSearch()});
$("#clearSearch").addEventListener("click",resetSearch);
$("#sortSelect").addEventListener("change",e=>sortResults(e.target.value));
$("#cartBtn").addEventListener("click",showCart);
$("#favoritesBtn").addEventListener("click",showFavorites);
$("#loginBtn").addEventListener("click",()=>showLogin(false));
$("#createAccount").addEventListener("click",openAccountScreen);
$("#shortcutLogin").addEventListener("click",()=>showLogin(false));
$("#purchasesBtn").addEventListener("click",()=>openModal(`<h2 id="modalTitle">Minhas compras</h2><p>Pedidos e histórico de compras são simulados nesta versão.</p><button class="primary-btn" id="loginFromPurchases">Entrar na conta demonstrativa</button>`));
$("#deliveryBtn").addEventListener("click",()=>openModal(`<h2 id="modalTitle">Enviar para</h2><p>Digite um CEP para simular a região de entrega.</p><form id="cepForm"><label>CEP<input id="cepInput" inputmode="numeric" placeholder="00000-000" maxlength="9" required pattern="[0-9-]{5,9}"></label><button class="primary-btn" type="submit">Salvar localização</button></form>`));
$("#productsNext").addEventListener("click",nextProducts);
$(".shortcut-next").addEventListener("click",()=>{$("#categoryDrawer").classList.toggle("hidden");$("#categoryDrawer").scrollIntoView({behavior:"smooth",block:"nearest"})});
$("#showAllOffers").addEventListener("click",()=>renderResults(products,"Todas as ofertas"));
$("#closeCategories").addEventListener("click",()=>$("#categoryDrawer").classList.add("hidden"));
$$("[data-go-slide]").forEach(b=>b.addEventListener("click",()=>{const index=b.dataset.goSlide;$$(".hero-slide").forEach(s=>s.classList.toggle("active",s.dataset.slide===index));$$("[data-go-slide]").forEach(d=>d.classList.toggle("selected",d===b))}));
$("#acceptCookies").addEventListener("click",()=>{localStorage.setItem("ml-demo-cookies","accepted");$("#cookieBar").classList.add("hidden");toast("Cookies aceitos nesta demonstração")});
$("#configureCookies").addEventListener("click",showCookieSettings);
$("#privacyLink").addEventListener("click",e=>{e.preventDefault();showCookieSettings()});
$("#modalClose").addEventListener("click",closeModal);
$("#modalBackdrop").addEventListener("click",e=>{if(e.target===$("#modalBackdrop"))closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
$("#modalContent").addEventListener("submit",e=>{
 e.preventDefault();
 if(e.target.id==="demoLogin"){const email=new FormData(e.target).get("email");toast(`Sessão local demonstrativa iniciada para ${email}`);closeModal()}
 if(e.target.id==="sellerForm"){toast("Loja demonstrativa criada nesta sessão");closeModal()}
 if(e.target.id==="contactForm"){toast("Mensagem demonstrativa registrada localmente");closeModal()}
 if(e.target.id==="cepForm"){const cep=$("#cepInput").value.trim();$("#deliveryBtn").innerHTML=`<span class="pin">⌖</span><span>Enviar para<br><b>${cep}</b></span>`;closeModal();toast("CEP atualizado para esta demonstração")}
});
$("#modalContent").addEventListener("click",e=>{
 if(e.target.id==="switchAccount"){const wantsRegister=e.target.textContent.includes("Criar conta");closeModal();if(wantsRegister)openAccountScreen();else showLogin(false);return}
 if(e.target.id==="keepShopping"){closeModal();return}
 if(e.target.id==="checkoutBtn"){openModal(`<h2 id="modalTitle">Finalizar compra</h2><p>O checkout é somente uma simulação, não haverá cobrança nem pedido real.</p><p>Para continuar a demonstração, seu carrinho contém ${cart.reduce((s,i)=>s+i.qty,0)} item(ns).</p><button class="primary-btn" id="finishDemo">Concluir demonstração</button>`);return}
 if(e.target.id==="finishDemo"){cart=[];saveCart();closeModal();toast("Compra demonstrativa concluída; nenhum pagamento foi realizado");return}
 if(e.target.id==="removeCoupon"){activeCoupon="";localStorage.removeItem("ml-demo-coupon");showCart();return}
 if(e.target.id==="saveCookies"){localStorage.setItem("ml-demo-cookies",JSON.stringify({preferences:$("#prefCookies").checked,stats:$("#statsCookies").checked}));$("#cookieBar").classList.add("hidden");closeModal();toast("Preferências de cookies salvas");return}
 if(e.target.id==="loginFromPurchases"){showLogin(false);return}
 if(e.target.id==="playInfo"){renderResults(products.filter(p=>p.category.includes("Games")),"Produtos de entretenimento e games");closeModal();return}
});

$("#backHome").addEventListener("click",closeOffersPage);
$("#offersSort").addEventListener("change",e=>{offersSortMode=e.target.value;offersPageNumber=1;renderOffersPage()});
$("#offersPagination").addEventListener("click",e=>{const b=e.target.closest("[data-offer-page]");if(!b||b.disabled)return;offersPageNumber=Number(b.dataset.offerPage);renderOffersPage();$("#offersPage").scrollIntoView({behavior:"smooth",block:"start"})});
$("#offersGrid").addEventListener("click",e=>{const b=e.target.closest("[data-add], [data-favorite], [data-product]");if(!b)return;if(b.matches("[data-product]")){showProduct(b.dataset.product)}});
$$("[data-offer-filter]").forEach(b=>b.addEventListener("click",()=>openOffersPage(b.dataset.offerFilter)));
$("#alphabetLinks").innerHTML="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter=>`<button data-letter="${letter}">${letter}</button>`).join("");
$("#alphabetLinks").addEventListener("click",e=>{const b=e.target.closest("[data-letter]");if(!b)return;const letter=b.dataset.letter;const matches=products.filter(p=>p.name.toLocaleUpperCase("pt-BR").startsWith(letter));closeOffersPage();renderResults(matches,`Produtos começando com ${letter}`)});
$("#accountBack").addEventListener("click",closeAccountScreen);
$("#accountHome").addEventListener("click",e=>{e.preventDefault();closeAccountScreen();resetSearch();window.scrollTo({top:0,behavior:"smooth"})});
$("#signupForm").addEventListener("submit",e=>{e.preventDefault();const data=new FormData(e.currentTarget);const email=data.get("email");const name=data.get("name");closeAccountScreen();openModal(`<h2 id="modalTitle">Cadastro demonstrativo iniciado</h2><p>Olá, ${String(name).replace(/[<>&"]/g,"")}. A conta de demonstração para <b>${String(email).replace(/[<>&"]/g,"")}</b> foi registrada apenas nesta sessão.</p><p>Nenhum e-mail foi enviado e nenhuma conta real foi criada.</p><button class="primary-btn" id="finishSignup">Continuar comprando</button>`)});
$("#googleSignup").addEventListener("click",()=>toast("O acesso com Google não está conectado neste protótipo"));
$("#corporateSignup").addEventListener("click",()=>{const title=$("#accountScreen h1");title.innerHTML="Crie sua conta corporativa<br>para vender online";$("#signupName").placeholder="Nome da empresa";toast("Formulário de conta corporativa demonstrativa")});
$("#modalContent").addEventListener("click",e=>{if(e.target.id==="finishSignup"){closeModal();return}});
document.addEventListener("click",e=>{
 const footer=e.target.closest("[data-footer-action]");
 if(footer){const label=footer.dataset.footerAction;if(label==="Privacidade"){showCookieSettings();return}if(label==="Ajuda"||label==="Trabalhe conosco"||label==="Termos e condições"||label==="Acessibilidade"){openModal(`<h2 id="modalTitle">${label}</h2><p>Esta seção faz parte da reprodução educacional e não representa os serviços oficiais do Mercado Livre.</p><button class="primary-btn" id="footerClose">Entendi</button>`);return}}
 if(e.target.id==="footerClose"){closeModal()}
});

if(localStorage.getItem("ml-demo-cookies"))$("#cookieBar").classList.add("hidden");
updateCartCount();
$$("[data-coupon]").forEach(b=>{if(b.dataset.coupon===activeCoupon){b.classList.add("activated");b.textContent="Cupom ativado ✓"}});
const track=$("#productTrack");
if(track){track.innerHTML=products.slice(1,9).map(productCard).join("")}
