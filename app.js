const cerrar= document.querySelector(".close");
const abrir= document.querySelector(".button");
const modal= document.querySelector(".modal");
const modalC= document.querySelector(".modal-container");

const add= document.querySelectorAll(".add");
const containerBuy= document.querySelector(".container-buy");
const titleTarget= document.querySelectorAll(".title-target");
const priceTarget= document.querySelectorAll(".price-target");
const amountBuy= document.querySelectorAll(".amount");
const imageBuy= document.querySelectorAll(".img-target");
const textTotal= document.querySelector(".text-total");

let arrays=[];
let arrayTotal=[];
let amount=1;
let total=0;

for(let i=0; i<add.length; i++){
  add[i].addEventListener('click', () => {
    amount=amountBuy[i].value;
    if(amount != ''){
    const titulo=titleTarget[i].textContent;
    const priceBuy= priceTarget[i].textContent;
    const pBuy=priceBuy.replace('.','').replace('$','');
    const subtotal= Number(pBuy)*amount;
    const imgBuy=imageBuy[i].src;
    total+=subtotal;
    arrayTotal.push(subtotal);
    arrays.push({titulo,priceBuy,subtotal,amount,imgBuy,total});
    const elements= arrays.map((array) => {
      return `<div class="elemento">
      <img class="img-buy" src="${array.imgBuy}" alt="">
      <div >
        <h4 class="title-buy">${array.titulo}</h4>
        <p class="price-buy">${array.priceBuy}</p>
        <div class="amount-buy">
              <button class="button-menos">-</button>
              <input type="number" min="1" value="${array.amount}" class="amount">
              <button class="button-mas">+</button>
              <p class="subtotal">Subtotal:${array.subtotal}</p>
            </div>
      </div>
    </div>`;
    });        
    textTotal.innerHTML=`Total:$${total}`;
    containerBuy.innerHTML= elements.join("");
    } 
    
    
      
  });
}





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
  modalC.style.opacity='1';
  modalC.style.visibility='visible';
  modal.classList.toggle('modal-close'); //toggle quita y pune la clase
})

cerrar.addEventListener('click', () =>{
  
  modal.classList.toggle('modal-close');
  setTimeout(function(){
    modalC.style.opacity='0';
    modalC.style.visibility='hidden';
  },700)
})
