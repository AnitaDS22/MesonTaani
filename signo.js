// Trabajo practico reserva y gestion mesas meson
// El mozo tiene la opcion de realizar diferentes actividades 
// 1. Funcion reserva de mesa
// 2. Eleccion de menu
// 3. Funcion de proveer la cuenta final


let cantidadMesas = 1;
let opcionAccion = 0;
let mesa2 = 4;
let mesa4 = 6;
let mesa8 = 4;
let mesa12 = 2;


// Funcion reserva de mesa

function ReservaMesa() {

  let cantidadPersonas = prompt("Cuantas personas quieren comer?")

  if ((cantidadPersonas == 2) && (mesa2 > 0)) {
    mesa2 = mesa2 - 1;
    cantidadMesas++;
    alert("Bienvenido, tenemos una mesa disponible para usted")
  }
  else if (((cantidadPersonas > 2) && (cantidadPersonas < 5)) && (mesa4 > 0)) {
    mesa4 = mesa4 - 1;
    cantidadMesas++;
    alert("Bienvenido, tenemos una mesa disponible para usted")
  }
  else if (((cantidadPersonas > 5) && (cantidadPersonas < 9)) && (mesa8 > 0)) {
    mesa8 = mesa8 - 1;
    cantidadMesas++;
    alert("Bienvenido, tenemos una mesa disponible para usted")
  }
  else if (((cantidadPersonas > 8) && (cantidadPersonas < 12)) && (mesa12 > 0)) {
    mesa12 = mesa12 - 1;
    cantidadMesas++;
    alert("Bienvenido, tenemos una mesa disponible para usted")
  } else {

    alert(" No tenemos ninguna mesa disponible en este momento")
  }
}

class Menus {
  constructor(entrada, segungoplato, postre, valor, calorias) {

    this.entrada = entrada;
    this.segungoplato = segungoplato;
    this.postre = postre;
    this.valor = valor;
    this.calorias = calorias;
  }
}

const menu1 = new Menus('Ensalada', 'Noquis con Papa', 'Helado', $1000, 300);
const menu2 = new Menus('Ensalada', 'Bife de choriso', 'Flan', $1500, 500);
const menu3 = new Menus('Sopa Calabaza', 'Mix Verduras', 'Torta', $1200, 100);
const menu4 = new Menus('Mix picada', 'Hamburguesa', 'Panqueque', $1800, 200);

console.log(menu1, menu2, menu3, menu4)

const menuElegido = prompt ('elija que menu quiere: menu 1, menu 2, menu 3, menu 4')

console.log(menuElegido);




while (cantidadMesas < 16) {
  alert("Bienvenido a nuestro Meson")

  // crear menu de acciones para mozo 

  let accionMesa = prompt("Seleccione accion realizar: \n 1. Reserva mesa \n 2. Eleccion de Menu \n 3. Cuenta total \n 4. Liberar mesa ");

  switch (accionMesa) {

    case '1':
      // 1. Reserva mesa.
      ReservaMesa();
      break;
    case '2':
      // 2. Eleccion de Menu
      break;
    case '3':
      // 3. Cuenta total
      break;
    case '4':
      // 4. Liberar mesa
      break;
    default:
      alert("Ingrese la accion correcta");
      break;


  }
}

alert("Lamentablemente tenemos todo ocupado")





