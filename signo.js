// Trabajo practico reserva y gestion mesas meson
// El mozo tiene la opcion de realizar diferentes actividades 
// 1. Funcion reserva de mesa
// 2. Eleccion de menu
// 3. Funcion de proveer la cuenta final
// 4. Opcion disponible para utilizar


let cantidadMesas = 1;
let opcionAccion = 0;
let mesa2 = 4;
let mesa4 = 6;
let mesa8 = 4;
let mesa12 = 2;

let headerMeson = document.getElementById("header")
let headerbienvenidos = document.getElementById("bienvenidos")

headerbienvenidos.onmousemove = () =>
  headerbienvenidos.innerText = "Ahora Elegimos tu menu"


// div medio reserva mesas : acciones
const eleccionAccion = document.getElementById("accion")
const botonaccionReserva = document.getElementById("buttonaccionReserva")


botonaccionReserva.addEventListener('click', () => {
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


  function detallesmenu() {

    // clase Menus
    class Menus {
      constructor(opcion, entrada, segungoplato, postre, valor, stock) {

        this.opcion = opcion
        this.entrada = entrada
        this.segungoplato = segungoplato
        this.postre = postre
        this.valor = valor
        this.stock = stock
      }

      RestaStock() {
        this.stock = this.stock - 1;
        console.log("El stock de" + (this.opcion) + "ha sido actualizado")
      }


    }


    const MenusdelaCasa = []

    const menu1 = new Menus(1, 'Ensalada', 'Noquis con Papa', 'Helado', 1000, 10)
    MenusdelaCasa.push(menu1)
    const menu2 = new Menus(2, 'Ensalada', 'Bife de choriso', 'Flan', 1500, 15)
    MenusdelaCasa.push(menu2)
    const menu3 = new Menus(3, 'Sopa Calabaza', 'Mix Verduras', 'Torta', 1200, 5)
    MenusdelaCasa.push(menu3)
    const menu4 = new Menus(4, 'Mix picada', 'Hamburguesa', 'Panqueque', 1800, 20)
    MenusdelaCasa.push(menu4)

    console.table(MenusdelaCasa)

    const botonaccionMenu = document.getElementById("buttonaccionMenu")
const divListaMenus = document.getElementById ("divListaMenus")


  MenusdelaCasa.forEach(menuArray=>{
    divListaMenus.innerHTML += `
    <div id= "${menuArray.opcion}" class="card">

      <div class="card-body">
      <h2 class="card-title">${menuArray.entrada}</h2>
      <h2 class="card-title">${menuArray.segungoplato}</h2>
      <h2 class="card-title">${menuArray.postre}</h2>
      <h1 class="card-title">${menuArray.valor}</h1>

      <button id=${menuArray.opcion} class="btn btn-primary"> QUIERO </button>

</div>
</div>
`
  })


    const Menucarrito = []

    let menusofrecido = "Estos son los menus que tenemos para ofrecerle : "

    alert('Estos son los menus que tenemos \n')

    for (item of MenusdelaCasa) {
      menusofrecido += ` \n Menu ${item.opcion} \n entrada: ${item.entrada} \n segundo plato ${item.segungoplato} \n postre ${item.postre}
  \n `;

    }

    alert(`Elija que menu desea: 1. 2. 3. 4`)
    let respuesta = parseInt(prompt(menusofrecido))

    alert(" El menu seleccionado es " + respuesta)

    respuesta.forEach((respuesta) => {
      console.log(respuesta)
      localStorage.setItem('menuahora', respuesta)

    })
    console.log(localStorage.getItem('menuahora'))


    while ((respuesta != 0) || (respuesta < 5)) {
      switch (respuesta) {
        case 1:
          Menucarrito.push(MenusdelaCasa[0])
          alert(`Agregamos este menu a la cuenta ${MenusdelaCasa[0].id}`)
          MenusdelaCasa[0].RestaStock()
          break;
        case 2:
          Menucarrito.push(MenusdelaCasa[1])
          alert(`Agregamos este menu a la cuenta ${MenusdelaCasa[1].id}`)
          MenusdelaCasa[1].RestaStock()
          break;
        case 3:
          Menucarrito.push(MenusdelaCasa[2])
          alert(`Agregamos este menu a la cuenta ${MenusdelaCasa[2].id}`)
          MenusdelaCasa[2].RestaStock()
          break;
        case 4:
          Menucarrito.push(MenusdelaCasa[3])
          alert(`Agregamos este menu a la cuenta ${MenusdelaCasa[3].id}`)
          MenusdelaCasa[3].RestaStock()
          break;
        default:
          alert(`Entendemos que no desea nada mas, le traeremos la cuenta`)
          break;
      }

      respuesta = parseInt(prompt(`Elija que menu desea: 1. 2. 3. 4 \n En caso de no querer ningùn nuevo menu elija opcion 0`))
    }

  } // cierre funcion detalle menu
} // cierre addlistener click opcion reserva
) // fin click opcion reserva

// ---------------

// Accion boton buttonaccionMenu



function menuelegido() {

  // alert (`Este menu ${item.opcion} tiene el valor de $ ${item.valor} `)

  // console.log(menuelegido(menuseleccionado)) AQUIIII LO APAGUE

  alert(menuelegido(MenusdelaCasa.opcion))
}


// menuelegido() AQUIII LO APAGUE
//const Menucliente = MenusdelaCasa.find (Menus => Menus.opcion === menuseleccionado) 
//alert (Menucliente) AQUIII LO APAGUE


// Cuenta total

function cuentaTotal(cantidad, sumaTotal) {

  const descuento = 50
  let totalFinal = sumaTotal * 0.5

  alert("El total de su cuenta por la " + cantidad + " personas es " + totalFinal + " con un descuento de " + descuento + "%")

}

cuentaTotal(20, 10000)

// Accion toma datos de reserva. 
// Se llena formulario con datos que luego se guardaran en un array

class Clientes {
  constructor(cliente, nombre, cantidad, dia, hora, mail) {
    this.cliente = cliente
    this.nombre = nombre
    this.cantidad = cantidad
    this.dia = dia
    this.hora = hora
    this.mail = mail

  }
}

reservadelaCasa = []

const inputdatosNombre = document.getElementById('inputNombre').value;
const inputdatosCant = parseInt(document.getElementById('inputcantidad').value);
const inputdatosDia = document.getElementById('inputDia').value;
const inputdatosHora = parseInt(document.getElementById('inputHora').value);
const inputdatosmail = document.getElementById('inputMail').value;


botonEnviar.onclick = () => {

  console.log(inputNombre.value)
  console.log(inputcantidad.value)
  console.log(inputDia.value)
  console.log(inputHora.value)
  console.log(inputMail.value)

  // const nombre = inputNombre.value
  // alert (`Bienvenido/a ${nombre}`)

  reservadelaCasa.nombre = inputNombre.value
  reservadelaCasa.cantidad = inputcantidad.value
  reservadelaCasa.dia = inputDia.value
  reservadelaCasa.hora = inputHora.value
  reservadelaCasa.mail = inputMail.value

  console.log(reservadelaCasa)

  localStorage.setItem('cliente', inputNombre.value)
  localStorage.setItem('dia', inputDia.value)

  const infoClienteReserva = {
    usuario: inputNombre.value,
    dia: inputDia.value,
    cantidad: inputcantidad.value,
    hora: inputHora.value,
  }

  const infoclienteResJSON = JSON.stringify(infoClienteReserva)

  console.log(infoclienteResJSON)

  localStorage.setItem('infoclienteJson', infoclienteResJSON)


  reservadelaCasa.forEach((Clientes) => {
    const nuevareserva = document.createElement('cliente')
    nuevareserva.innerText = `${cliente}`
  }) 
  alert(`bienvenido/a ${reservadelaCasa.nombre}, el dia ${reservadelaCasa.dia} tienen una reserva a las ${reservadelaCasa.hora} para  ${reservadelaCasa.cantidad}`)

  // reservadelaCasa.push(cliente)

  //console.log(reservadelaCasa)

  // solo cambie nombre de la variable nombre por eso solo llame a la variable nombre asi

  inputNombre.value = '';
  inputcantidad.value = '';
  inputDia.value = '';
  inputHora.value = '';


  // const cliente1 = new cliente ()

  // falta hacer el push de los datos del cliente y grabarlos 


} // fin onclick

const botonAgenda = document.getElementById("buttonaccionAgenda")

botonAgenda.onclick = () => {
  const infoclienteResJSON = JSON.parse(localStorage.getItem('infoclienteResJSON'))
  console.log(infoclienteResJSON)
}
