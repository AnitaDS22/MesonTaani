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

function ReservaMesa () {
 
let cantidadPersonas = prompt ("Cuantas personas quieren comer?")

if ((cantidadPersonas == 2) && (mesa2 > 0))
{ mesa2 = mesa2 - 1;
  cantidadMesas ++;
  alert ("Bienvenido, tenemos una mesa disponible para usted")
} 
else if (((cantidadPersonas > 2) && (cantidadPersonas < 5)) && (mesa4 > 0))
{ mesa4 = mesa4 - 1;
  cantidadMesas ++;
  alert ("Bienvenido, tenemos una mesa disponible para usted")
} 
else if (((cantidadPersonas > 5) && (cantidadPersonas < 9)) && (mesa8 > 0))
{ mesa8 = mesa8 - 1;
  cantidadMesas ++;
  alert ("Bienvenido, tenemos una mesa disponible para usted")
} 
else if (((cantidadPersonas > 8) && (cantidadPersonas < 12)) && (mesa12 > 0))
{ mesa12 = mesa12 - 1;
  cantidadMesas ++;
  alert ("Bienvenido, tenemos una mesa disponible para usted")
} else {

alert(" No tenemos ninguna mesa disponible en este momento")
}
}


while ( cantidadMesas < 16) {
alert ("Bienvenido a nuestro Meson")
ReservaMesa ()
}

alert ("Lamentablemente tenemos todo ocupado")
// crear menu de acciones para mozo 

