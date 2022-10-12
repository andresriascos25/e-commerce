const cerrar= document.querySelector(".close");
const abrir= document.querySelector(".button");
const modal= document.querySelector(".modal");
const modalC= document.querySelector(".modal-container");

const add= document.querySelectorAll(".add");
const containerBuy= document.querySelector(".container-buy");
const titleTarget= document.querySelectorAll(".title-target");
const priceTarget= document.querySelectorAll(".price-target");

let arrays=[];

for(let i=0; i<add.length; i++){ 

  add[i].addEventListener('click', () => {
    const titulo=titleTarget[i].textContent;
    const precio= priceTarget[i].textContent;
    arrays.push({titulo,precio});
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
              <p class="subtotal">Subtotal:</p>
            </div>
      </div>
    </div>`;
    });
    containerBuy.innerHTML= elements.join("");
  });

}


  

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
