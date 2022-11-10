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
      detallesmenu();
      break;
    case '3':
      cuentaTotal();
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

// LISTA DE MENUS
function detallesmenu() {

const MenusdelaCasa = []

// clase Menus
class Menus {
  constructor (opcion, entrada, segungoplato, postre, valor, stock) {

    this.opcion = opcion
    this.entrada = entrada
    this.segungoplato = segungoplato
    this.postre = postre
    this.valor = valor
    this.stock = stock
  }
}
const menu1 = new Menus (1,'Ensalada', 'Noquis con Papa', 'Helado', 1000, 10)
MenusdelaCasa.push(menu1)
const menu2 = new Menus (2,'Ensalada', 'Bife de choriso', 'Flan', 1500, 15)
MenusdelaCasa.push(menu2)
const menu3 = new Menus (3,'Sopa Calabaza', 'Mix Verduras', 'Torta', 1200, 5)
MenusdelaCasa.push(menu3)
const menu4 = new Menus (4,'Mix picada', 'Hamburguesa', 'Panqueque', 1800, 20)
MenusdelaCasa.push(menu4)


console.log (Menus)

let menuseleccionado = prompt ('Elija que menu desea: 1. 2. 3. 4')

// mostrar los menus 

menu1.array.forEach(entrada => { 
  alert (entrada);
  
});


alert ('Este es el menu');

}


  



