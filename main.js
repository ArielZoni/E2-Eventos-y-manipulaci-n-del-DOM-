/* Crear el array de objetos "Pizzas". 🍕
👉 Crear un archivo HTML con un input de tipo number, un botón y un contenedor en el cual renderizar el resultado de la búsqueda. 

👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
👉 Renderizar en el contenedor un h2 con el nombre y en un h3 con el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

🚨 Si el número ingresado no coincide con ningún id, renderizar (no sirve un alert) un mensaje de error en el contenedor. 
🚨 Si no se ingresa un número, renderizar (no sirve un alert) un mensaje de error diferente en el contenedor. 
🚨 Solo debe renderizarse una única cosa , ya sea la nueva pizza, o el nuevo mensaje de error. El resto se debe pisar. */



let pizzas = [
  {
    id: 1,
    nombre: "Calabresa",
    ingredientes: [
      "tomate",
      "mozzarella",
      "aceitunas",
      "salame",
      "pimienta",
      "anchoa",
    ],
    precio: 1500,
  },
  {
    id: 2,
    nombre: "Napolitana",
    ingredientes: [
      "mozzarella",
      "tomate al natural",
      "ajo",
      "aceitunas verdes",
      "albahaca fresca",
    ],
    precio: 500,
  },
  {
    id: 3,
    nombre: "Palmitos",
    ingredientes: [
      "salsa de tomate",
      "mozzarella",
      "jamon",
      "aceite",
      "palmitos",
      "salsa golf",
      "especias",
    ],
    precio: 800,
  },
  {
    id: 4,
    nombre: "Carioca",
    ingredientes: [
      "salsa de tomate",
      "mozzarella",
      "jamon",
      "anana",
      "caramelo",
      "aceitunas",
      "especias",
    ],
    precio: 1000,
  },
  {
    id: 5,
    nombre: "Caprese",
    ingredientes: [
      "mozzarella",
      "rodajas de tomate",
      "albahaca",
      "aceite oliva",
      "aceitunas",
      "especies",
    ],
    precio: 900,
  },
  {
    id: 6,
    nombre: "Cuatro Quesos",
    ingredientes: ["mozzarella", "provolone", "parmesano", "emmental"],
    precio: 1200,
  },
];

const inputNumber = document.getElementById("idPizza");
const btnConsultar = document.getElementById("btn-agg");
const nombrePizza = document.getElementById("nombrePizza");
const precioPizza = document.getElementById("precioPizza");
const pizzaContainer = document.getElementById("pizza-container");
const infopizza = document.querySelector("info");

btnConsultar.addEventListener("click", buscarPizza);

function buscarPizza(){
  let nameInput = inputNumber.value;
  //El usuario ingresó un ID?
  if(nameInput  === " "){
      showError("Error no ingresó ningún ID");
      return;
  }
  crearHTML(nameInput);
}

function showError(error){
  let msgError = document.createElement("p");
  msgError.textContent = error;
  msgError.classList.add("error");
  infopizza.appendChild(msgError);
 
  
}


function crearHTML(dato){
  let pizza = pizzas.filter((item)=>item.id === parseInt(dato));
  nombrePizza.innerHTML = pizza.map((item) => item.nombre);
  precioPizza.innerHTML = pizza.map((item) => `$${item.precio}`);

  //El usuario ingresó un ID válido?
  if(dato<=0 || dato>pizzas.length){
      showError("No coincide ese ID. Ingrese un ID válido");
      nombrePizza.innerHTML = "Escriba el ID";
  }
  //Reseteo el valor del input
  input.value = "";
}
