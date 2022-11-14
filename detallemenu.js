// LISTA DE MENUS

let MenusdelaCasa = []

class Menus {
  constructor (opcion, entrada, segungoplato, postre, valor, stock) {

    this.opcion = opcion;
    this.entrada = entrada;
    this.segungoplato = segungoplato;
    this.postre = postre;
    this.valor = valor;
    this.stock = stock;
  }
}


MenusdelaCasa.push(new Menus(1, 'Ensalada', 'Noquis con Papa', 'Helado', $1000, 10));
MenusdelaCasa.push(new Menus(2, 'Ensalada', 'Bife de choriso', 'Flan', $1500, 15));
MenusdelaCasa.push(new Menus(3, 'Sopa Calabaza', 'Mix Verduras', 'Torta', $1200, 5));
MenusdelaCasa.push(new Menus(4, 'Mix picada', 'Hamburguesa', 'Panqueque', $1800, 20));

consolelog (Menus)

function detallesmenu() 

  const menu1desc = Menus.join (' ,');
  
  console.log (menu1desc);

 // console.log('menu1', 'menu2', 'menu3', 'menu4');



  const menuElegido = prompt('Elija que menu quiere: \n menu1 \n menu2 \n menu3 \n menu4' 
   );

  console.log(menuElegido);
let existe = false;
let posicion = -1;


MenusdelaCasa.forEach((Menus, indice) => {
if (menuseleccionado === Menus.opcion){
existe = true;
posicion = indice;
}
});


  // variable elija menu correcto

  let menuseleccionado = false

  // variable con datos del menu seleccionado

  let infomenuseleccionado

  while (menuseleccionado === false) {
    if (menuseleccionado === Menus.opcion) {
      menuseleccionado = true;

     if (infomenuseleccionado = menu1){

      alert("Su menu esta compuesto por: Primer plato Ensalada, Segundo plato Noquis con Papa y para finalizar de postre tenemos Helado");

    } else if (menuseleccionado === menu2) {
      menuseleccionado = true;

      infomenuseleccionado = menu2;

      alert('Su menu esta compuesto por: Primer plato Ensalada, segundo plato Bife de choriso, postre Flan,');

    }
    else if (menuseleccionado === menu3.opcion) {
      menuseleccionado = true;

      infomenuseleccionado = menu3;

      alert('Su menu esta compuesto por: Primer plato Sopa de Calabaza, segundo plato Mix de Verduras y postre Torta')
    }
    else if (menuseleccionado === menu4.opcion) {
      menuseleccionado = true;

      infomenuseleccionado = menu4;

      alert('Su menu esta compuesto por: Primer plato Mix picada, segundo plato Hamburguesa y postre Panqueque')
    }
    else {
      alert('Ese menu no esta disponible')
      menuseleccionado = parseInt(prompt('elija que menu quiere, opciones: menu1, menu2, menu3, menu4'))

    }

  }
  console.log(infomenuseleccionado);


}



if (menuseleccionado === 1) {

  function listaMenu (MenusdelaCasa) {
  let propiedades = objecto.keys(MenusdelaCasa);
  
  console.log (listaMenu)
  
  }
  listaMenu ()
  alert (listaMenu)
  
  }
  
    alert ('El precio del menu seleccionado es:')
    alert (Menus.valor)
    alert ('Este menu esta compuesto por:')
   alert (Menus.entrada)
   alert (Menus.segungoplato)
   alert (Menus.postre)
  
   for ( item of MenusdelaCasa) {
   // let menusofrecido = "Estos son los Menus que tenemos: "
   
    const menusofrecidoentrada = MenusdelaCasa.find ((Menus) => Menus.entrada)
    console.log (menusofrecidoentrada)
   alert ('Estos son los platos de entrada'  + menusofrecidoentrada )
   
  }
  

