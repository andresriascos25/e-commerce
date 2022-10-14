const cerrar = document.querySelector(".close");
const abrir = document.querySelector(".button");
const modal = document.querySelector(".modal");
const modalC = document.querySelector(".modal-container");
const select=document.querySelector('.select');
const cartCounterElement= document.querySelector('#carCounter');

const add = document.querySelectorAll(".add");
const containerBuy = document.querySelector(".container-buy");
const titleTarget = document.querySelectorAll(".title-target");
const priceTarget = document.querySelectorAll(".price-target");
const amountBuy = document.querySelectorAll(".amount");
const imageBuy = document.querySelectorAll(".img-target");
const textTotal = document.querySelector(".text-total");
const counterUp= document.querySelectorAll(".button-mas");
const counterDown= document.querySelectorAll(".button-menos");
const sizeSm= document.querySelectorAll(".size-sm");
const sizeLxl= document.querySelectorAll(".size-lxl");
const colorBlack=document.querySelectorAll(".black");
const colorSkin=document.querySelectorAll(".skin");
const clear= document.querySelectorAll('.cls');
const imgCls= document.querySelectorAll('.img-cls');

let arrays = [];
let arrayTotal = [];
let amount = 1;
let total = 0;
let color='black';
let sizeBuy='';
let elements=[];
let cartCount = 0;
/* let colorBuy='black'; */
      

// When the page loads     
init();


for (let i = 0; i < add.length; i++) {
  add[i].addEventListener('click', () => {
    amount = amountBuy[i].value;
    if (amount != '' ) {
      const titulo = titleTarget[i].textContent;
      const priceBuy = priceTarget[i].textContent;
      const pBuy = priceBuy.replace('.', '').replace('$', '');
      const subtotal = Number(pBuy) * amount;
      const imgBuy = imageBuy[i].src;
      colorBuy=color;
      total += subtotal;
      arrays.push({ titulo, priceBuy,pBuy, subtotal, amount, imgBuy , colorBuy, sizeBuy });
      updateLocalCart(arrays);
      elements = arrays.map((array) => {
        return `
        <div class="elemento">
          <img class="img-buy" src="${array.imgBuy}" alt="">
          <div>
            <h4 class="title-buy">${array.titulo}</h4>
            <div class="size-color">
              <p class="size-buy">Talla: ${array.sizeBuy}</p>
              <div class="color-buy ${array.colorBuy}"></div>
            </div>
            <div class="amount-buy">
              <div class="amount-cls">
                <p>Cantidad:${array.amount}</p>
                <button data-price="${array.pBuy}" class="cls">
                eliminar
                </button>
              </div>
              <p class="subtotal">${array.priceBuy}</p>
            </div>
          </div>
        </div>
    `;
      });
      textTotal.innerHTML = `Total:$${total}`;
      cartCount = arrays.length;
      cartCounterElement.textContent = cartCount;
      containerBuy.innerHTML = elements.join("");
      removeBuy();
    }
  });
}

function removeBuy () {
  const clear= document.querySelectorAll('.cls');
  for(let i=0; i<clear.length; i++){
    clear[i].addEventListener('click', (e) => {
      const price = e.target.dataset.price;
      arrays.splice(i, 1);
      elements.splice(i,1);
      containerBuy.innerHTML = elements.join("");
      total=total-Number(price);
      textTotal.innerHTML = `Total:$${total}`;
      cartCount = arrays.length;
      cartCounterElement.textContent = cartCount;
      updateLocalCart(arrays);
      removeBuy();
    })
  }
}

abrir.addEventListener('click', (e) => {
  modalC.style.opacity = '1';
  modalC.style.visibility = 'visible';
  modal.classList.toggle('modal-close'); //toggle quita y pune la clase
})

cerrar.addEventListener('click', () => {

  modal.classList.toggle('modal-close');
  setTimeout(function () {
    modalC.style.opacity = '0';
    modalC.style.visibility = 'hidden';
  }, 700)
});

for(let i=0; i<colorBlack.length; i++){
  colorBlack[i].addEventListener('click', (e)=>{
    if(colorSkin[i].classList.contains('select')){
      colorSkin[i].classList.toggle('select');
      colorBlack[i].classList.toggle('select');
    }else{
      colorBlack[i].classList.toggle('select');
    }    
    color='black';  
  })
}

for(let i=0; i<colorSkin.length; i++){
  colorSkin[i].addEventListener('click', (e)=>{
    if(colorBlack[i].classList.contains('select')){
      colorBlack[i].classList.toggle('select');
      colorSkin[i].classList.toggle('select');
    }else{
      colorSkin[i].classList.toggle('select');
    }
    color='skin';
  })
}

for(let i=0; i<counterUp.length; i++){
  counterUp[i].addEventListener('click', (e) => {   
    amount=amountBuy[i].value++;
  })
}

for(let i=0; i<counterDown.length; i++){
  counterDown[i].addEventListener('click', (e) => {
    amount=amountBuy[i].value;
    if(amountBuy[i].value>1){
      amount=amountBuy[i].value--;
    }    
  })
} 

for(let i=0; i<sizeSm.length; i++){

  sizeSm[i].addEventListener('click', () => {
    if(sizeLxl[i].classList.contains('select')){
      sizeLxl[i].classList.toggle('select');
      sizeSm[i].classList.toggle('select');
    }else{
      sizeSm[i].classList.toggle('select');
    }    
    sizeBuy=sizeSm[i].textContent; 
  })

}

for(let i=0; i<sizeLxl.length; i++){

  sizeLxl[i].addEventListener('click', () => {
    if(sizeSm[i].classList.contains('select')){
      sizeSm[i].classList.toggle('select');
      sizeLxl[i].classList.toggle('select');
    }else{
      sizeLxl[i].classList.toggle('select');
    }    
    sizeBuy=sizeLxl[i].textContent;  
  })

}

function init() {
  arrays = getLocalCart();
  elements = arrays.map((array) => {
    return `
    <div class="elemento">
      <img class="img-buy" src="${array.imgBuy}" alt="">
      <div>
        <h4 class="title-buy">${array.titulo}</h4>
        <div class="size-color">
          <p class="size-buy">Talla: ${array.sizeBuy}</p>
          <div class="color-buy ${array.colorBuy}"></div>
        </div>
        <div class="amount-buy">
          <div class="amount-cls">
            <p>Cantidad:${array.amount}</p>
            <button data-price="${array.pBuy}" class="cls">
            eliminar
            </button>
          </div>
          <p class="subtotal">${array.priceBuy}</p>
        </div>
      </div>
    </div>
`;
  });
  containerBuy.innerHTML = elements.join("");
  removeBuy();
  const items = document.querySelectorAll('.cls');
  total = 0;
  cartCount = arrays.length;

  items.forEach((item) => {
    const priceString = item.dataset.price;
    const price = parseInt(priceString);
    total += price;
  });
  cartCounterElement.textContent = cartCount;
  textTotal.innerHTML = `Total:$${total}`;
}


function updateLocalCart(cart) {
  const data = JSON.stringify(cart);
  localStorage.setItem('cart', data);
}

function getLocalCart() {
  const data = localStorage.getItem('cart');
  if (!data) {
    return [];
  }
  return JSON.parse(data);
}
