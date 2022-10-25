

let nombreIngresado = prompt ("ingrese su nombre");
let edad = prompt ("ingrese su edad");
let pais = prompt ("ingrese su pais");
let notaMate = prompt ("ingrese nota de matematica");
let notaLengua = prompt ("ingrese nota de Lengua");

let notamatematica = parseInt (notaMate);
let notafinallengua = parseInt (notaLengua);

notaPromedio = (notafinallengua + notamatematica) /2; 

alert ("HOLA " + nombreIngresado + " tu promedio es " + notaPromedio);




alert ("hola, tu nombre es " + nombreIngresado + " tu edad es " + edad + "sos de " + pais + "naciste en el año " + anioNacimiento );


// funciones
//calculadora

let opcionMenu = 0;
let resultado = 0;

function sumar (numero1, numero2){
    return numero1 + numero2;
}

function Restar (numero1, numero2){
    return numero1 - numero2;
}

function multiplicar (numero1, numero2){
    return numero1 * numero2;
}

function mostrarResultado (rsultado){
    alert(`tu resultado es: $(resultasdo)`)
}

while (opcionMenu !=5) {
    let numero1 = parseFloat(prompt("ingrese un numero"));
    let numero2 = parseFloat(prompt("ingrese un numero"));

    opcionMenu= prompt ("elja la operacion deseada (1.sumar, 2. Restar, 3. multiplicar, 4.dividir, 5. Salir");
}
switch (opcionMenu){
    case '1':
        resultado= sumar(numero1, numero2);
        motrarResultado(resultado)
        break;
    case '2':
        resultado= resta (numero1, numero2);
        motrarResultado(resultado)
        break;

     case 
     
  //convertidor de temperaturas
  
  let opcionMenu = 0

  function convertirCentigradosAFarenheit(grados) {
    let resultado = grados*1.8 + 32;
    llamarResultado(resultado);
  }
  
  function convertirFarenheitACentigrados(grados) {
    let resultado = (grados - 32)/1.8;
    llamarResultado(resultado);
  }
  
  function llamarResultado(resultado) {
    alert(`Su resultado es ${resultado}`);
  }
  
  do {
    let grados = parseFloat(prompt("Ingrese temperatura."));
    opcionMenu = prompt("Que desea realizar? (1. convertir C a F. 2. Convertir F a C. 3. Salir)");
    switch(opcionMenu) {
      case '1':
        convertirCentigradosAFarenheit(grados);
        break;
      case "2":
        convertirFarenheitACentigrados(grados);
        break;
      case '3':
        alert("Adios");
        break;
      default:
        alert("No se encuentra la opcion deseada.");
        break;
    }
  } while(opcionMenu != 3);