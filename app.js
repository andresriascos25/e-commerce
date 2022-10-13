const cerrar = document.querySelector(".close");
const abrir = document.querySelector(".button");
const modal = document.querySelector(".modal");
const modalC = document.querySelector(".modal-container");
const select=document.querySelector('.select');

const add = document.querySelectorAll(".add");
const containerBuy = document.querySelector(".container-buy");
const titleTarget = document.querySelectorAll(".title-target");
const priceTarget = document.querySelectorAll(".price-target");
const amountBuy = document.querySelectorAll(".amount");
const imageBuy = document.querySelectorAll(".img-target");
const textTotal = document.querySelector(".text-total");
const counterUp= document.querySelectorAll(".button-mas");
const counterDown= document.querySelectorAll(".button-menos");
const size= document.querySelectorAll(".size");
const colorBlack=document.querySelectorAll(".black");
const colorSkin=document.querySelectorAll(".skin");

let arrays = [];
let arrayTotal = [];
let amount = 1;
let total = 0;
let color='black';
/* let colorBuy='black'; */

for (let i = 0; i < add.length; i++) {
  add[i].addEventListener('click', () => {
    amount = amountBuy[i].value;
    if (amount != '') {
      const titulo = titleTarget[i].textContent;
      const priceBuy = priceTarget[i].textContent;
      const pBuy = priceBuy.replace('.', '').replace('$', '');
      const subtotal = Number(pBuy) * amount;
      const imgBuy = imageBuy[i].src;
      colorBuy=color;
      total += subtotal;
      //arrayTotal.push(subtotal);
      arrays.push({ titulo, priceBuy, subtotal, amount, imgBuy , colorBuy });
      const elements = arrays.map((array) => {
        return `
        <div class="elemento">
          <img class="img-buy" src="${array.imgBuy}" alt="">
          <div>
            <h4 class="title-buy">${array.titulo}</h4>
            <div class="size-color">
              <p class="size-buy">Talla:M</p>
              <div class="color-buy ${array.colorBuy}"></div>
            </div>
            <div class="amount-buy">
              <div>
                <button class="button-menos">-</button>
                <input type="number" min="1" value="${array.amount}" class="amount">
                <button class="button-mas ">+</button>
              </div>
              <p class="subtotal">${array.priceBuy}</p>
            </div>
          </div>
        </div>
    `;
      });
      textTotal.innerHTML = `Total:$${total}`;
      containerBuy.innerHTML = elements.join("");
      
    }



  });
}

/* <div class="elemento">
      <img class="img-buy" src="${array.imgBuy}" alt="">
      <div >
        <h4 class="title-buy">${array.titulo}</h4>
        <p class="price-buy">${array.priceBuy}</p>
        <div class="amount-buy">
              <button class="button-menos">-</button>
              <input type="number" min="1" value="${array.amount}" class="amount">
              <button class="button-mas">+</button>
              <p class="subtotal">Subtotal:$${array.subtotal}</p>
            </div>
      </div>
    </div> */



/* for(let i=0; i<amountBuy.length; i++){

  amountBuy[i].addEventListener('input', (e) =>{
    if(amountBuy[i].value != ''){
      add[i].addEventListener('click', () => {
        amount=amountBuy[i].value;
        const titulo=titleTarget[i].textContent;
        const priceBuy= priceTarget[i].textContent;
        const pBuy=priceBuy.replace('.','').replace('$','');
        const subtotal= Number(pBuy)*amount;
        array.push({titulo,priceBuy,subtotal,amount});
        console.log(array);       
      })
    }
  });
} */




/* let arrays=[];
let precioItem=undefined;
let amountBuy=undefined;
let total=0;


for(let i=0; i<add.length; i++){ 


  add[i].addEventListener('click', (e) => {
    const titulo=titleTarget[i].textContent;
    const precio= priceTarget[i].textContent;
    amountBuy= valor[i].value;
    const subtotal=precioItem*amountBuy;
    cantidad = precio.replace('$','');
    precioItem = cantidad.replace('.','');
    
    arrays.push({titulo,precio,subtotal});
    const elements= arrays.map((array) => {
      return `<div class="elemento">
      <img class="img-buy" src="./assets/clasica1.jpg" alt="">
      <div >
        <h4 class="title-buy">${array.titulo}</h4>
        <p class="price-buy">${array.precio}</p>
        <div class="amount-buy">
              <button class="button-menos">-</button>
              <input type="number" min="1" value="1" class="amount">
              <button class="button-mas">+</button>
              <p class="subtotal">Subtotal:${array.subtotal}</p>
            </div>
      </div>
    </div>`;
    });
    containerBuy.innerHTML= elements.join("");
  });

} */

/* add.addEventListener('click', (e) => {
const square= document.createElement('div');
  square.setAttribute('class','square');
  containerBuy.appendChild(square);
}) */

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


