//Solicitar al usuario que ingrese un texto y validar si contiene la letra “a”.

/*const texto = prompt("Ingrese un texto");

if ((texto.includes("a")) || (texto.includes("A"))){
    alert("El texto ingresado contiene la letra a")
}else{
    alert("El texto ingresado NO contiene la letra a")
}*/

//Solicitar al usuario que ingrese un texto y mostrarlo todo en minúsculas y todo en mayúsculas.

/*const texto = prompt("Ingrese un texto");

alert(texto.toLowerCase());
alert(texto.toUpperCase());*/

//Solicitar al usuario que ingrese una palabra y mostrar con qué letra comienza.

/*const palabra = prompt("Ingrese una palabra");

alert(palabra.charAt(0));*/

//Solicitar al usuario que ingrese una frase y mostrar cuántos caracteres tiene.

/*const frase = prompt("Ingrese una frase");

alert(frase.length);*/

//Solicitar a un usuario que ingrese un número y devolver cuántos dígitos tiene.

/*const numero = prompt("Ingrese un numero");

alert(numero.length);*/

//Solicitar al usuario que ingrese una palabra y mostrar con qué letra termina.

/*const palabra = prompt("Ingrese una palabra");

alert(palabra.slice(-1));*/

//Ingresar una cadena de texto y reemplazar los espacios por asteriscos.

/*const frase =  prompt("Ingrese una frase");

alert(frase.split(" ").join("*"));*/

//Solicitar al usuario una letra y una cadena de texto e indicar si contiene la letra indicada.

/*const letra = prompt("Ingrese una letra");
const texto = prompt("Ingrese un texto");
const letraMinuscula = letra.toLowerCase();
const letraMayuscula = letra.toUpperCase();

if (texto.includes(letraMayuscula) || texto.includes(letraMinuscula)){
    alert("El texto contiene la letra "+letra)
}else{
    alert("El texto NO contiene la letra "+letra)
}*/

//Solicitar un texto y mostrarlo todo menos la primera letra.

/*const texto = prompt("Ingrese un texto");

alert(texto.slice(1));*/

//Solicitar al usuario que ingrese su nombre en minúscula y mostrarlo con la primera letra mayúscula.

/*const nombre = prompt("Ingrese su nombre");
const nombreSinPrimerLetra = nombre.slice(1);
const primerLetraMayuscula = nombre.charAt(0).toUpperCase();

alert(primerLetraMayuscula+nombreSinPrimerLetra);*/

//-------------------------------CONDICIONALES-------------------------------

//Agregar al ejercicio 5 de Variables un validador de datos. Si ingresa un número entonces que me calcule las medidas, sino, que muestre un mensaje de error. 

/*
const medida_inicial = prompt("Ingrese una medida en metros");
const medida_inicial_en_pies = parseFloat(medida_inicial)*3.2808399;
const medida_inicial_en_pulgadas = parseFloat(medida_inicial)*39.3700787;
const medida_inicial_en_centimetros = parseFloat(medida_inicial)*100;

if (isNaN(medida_inicial)){
    alert("La medida ingresada no es un número");
}else{
    alert(medida_inicial+" "+"metros"+" "+"en pies es:"+" "+medida_inicial_en_pies);
    alert(medida_inicial+" "+"metros"+" "+"en pulgadas es:"+" "+medida_inicial_en_pulgadas);
    alert(medida_inicial+" "+"metros"+" "+"en centimetros es:"+" "+medida_inicial_en_centimetros);
}*/


//Solicitar al usuario su edad. Si es menor de 18, decir que es menor de edad, sino decir que es mayor.

/*const edad = parseInt(prompt("Ingrese su edad"));

if (edad<18){
    alert("Usted es menor de edad")
}else{
    alert("Usted es mayor de edad")
}*/

//Contexto: Una heladería. Solicitar al usuario sus sabores en un solo input. Luego preguntar si quiere cobertura de chocolate. Si dice Sí, mostrar el valor del helado 180 con el pedido completo: “Su helado sabor …. con cobertura de chocolate cuesta $180”. En caso de que no la requiera, será lo mismo pero sin cobertura de chocolate y el valor es de $150.

/*
const sabores = prompt("Ingrese todos los sabores que desea");
const cobertura = prompt("¿Quiere cobertura de chocolate?");

if (cobertura == "si"){
    alert("Su helado sabor "+sabores+" con cobertura de chocolate cuesta $180")
}else{
    alert("Su helado sabor "+sabores+" sin cobertura de chocolate cuesta $150")
}*/

/*
const sabores = prompt("Ingrese todos los sabores que desea");
const cobertura = confirm("¿Quiere cobertura de chocolate?");

if (cobertura){
    alert("Su helado sabor "+sabores+" con cobertura de chocolate cuesta $180")
}else{
    alert("Su helado sabor "+sabores+" sin cobertura de chocolate cuesta $150")
}*/


//Mejorar el ejercicio 1 de Variables: Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos. Informar al usuario si el número resultante es par o impar.

/*
const primerNumero = prompt("Ingrese el primer número");
const segundoNumero = prompt("Ingrese el segundo número");
const suma = parseFloat(primerNumero) + parseFloat(segundoNumero);

console.log("La suma de sus dos numeros es:"+" "+suma);

if (suma%2 === 0){
    alert(suma+" es un número par")
}else{
    alert(suma+" no es un número par") 
}
*/

//Solicitar al usuario un número e indicar si es positivo, negativo o cero.

/*
const numero = prompt("Ingrese un número");

if (numero == 0){
    alert("El número es 0")
}else if (numero>0){
    alert("El número es positivo")
}else if (numero<0) {
    alert("El número es negativo")
}*/

//Solicitar al usuario que ingrese un monto. Si el monto es mayor a 2000 que aplique un descuento del 10%. Mostrar el total a pagar.

/*const monto = prompt("Ingrese un monto");
const newMonto = parseFloat(monto)*0.9;

if (monto >= 2000){
    alert("su monto es: "+newMonto)
}else{
    alert("Su monto es: "+monto)
}*/


//Solicitar al usuario que ingrese una cadena de texto y luego un una posición. Indicar si el dígito de esa posición es vocal o no lo es. (Puede ser consonante, espacio, comilla, etc.)










//Solicitar al usuario que ingrese una nota del 1 al 10. Si está entre 1 y 3 responder: Aplazado, si está entre 4 y 5 responder: Reprobado , y 6 o más aprobado. 

/*const nota = prompt("Ingrese una nota");

if (nota==1 || nota==2 || nota==3){
    alert("Aplazado");
}else if(nota==4 || nota==5){
    alert("Reprobado");
}else if(nota>=6 && nota<=10){
    alert("Aprobado");
}else{
    alert("Ingrese una nota valida");
}*/

//Solicitar al usuario dos números e indicar cual es el mayor o si son iguales.

/*const primerNumero=prompt("Ingrese el primer numero");
const segundoNumero=prompt("Ingrese el segundo numero");

if(primerNumero==segundoNumero){
    alert("Ingresó dos veces el mismo número");
}else if(primerNumero>segundoNumero){
    alert("El número mayor es: "+primerNumero);
}else if(segundoNumero>primerNumero){
    alert("El número mayor es: "+segundoNumero);
}else{
    alert("No ingresó números");
}*/

//Solicitar al usuario que indique un mes (del 1 al 12) e indicar si tiene 30 días, 31 días o 28/29 días.

/*var mes = prompt("Ingrese un número de mes");

switch(parseInt(mes)){
    case 1:
        alert("tiene 31 días");
        break;
    case 2:
        alert("tiene 28 días");
        break;
    case 3:
        alert("tiene 31 días");
         break;
    case 4:
        alert("tiene 30 días");
        break;
    case 5:
        alert("tiene 31 días");
         break;
    case 6:
        alert("tiene 30 días");
        break;
    case 7:
        alert("tiene 31 días");
         break;
    case 8:
        alert("tiene 31 días");
         break;
    case 9:
        alert("tiene 30 días");
        break;
    case 10:
        alert("tiene 31 días");
         break;
    case 11:
        alert("tiene 30 días");
        break;
    case 12:
        alert("tiene 31 días");
         break;
    default:
        alert("Ingrese un número de mes válido");
}*/

//Solicitar al usuario que ingrese 3 números e indicar cual es el mayor.

/*const primerNumero = prompt("Ingrese el primer número");
const segundoNumero = prompt("Ingrese el segundo número");
const tercerNumero = prompt("Ingrese el tercer número");

if (primerNumero>segundoNumero && primerNumero>tercerNumero){
    alert("El primer número es el mayor: "+primerNumero);
}else if (segundoNumero>primerNumero && segundoNumero>tercerNumero){
    alert("El segundo número es el mayor: "+segundoNumero);
}else if (tercerNumero>primerNumero && tercerNumero>segundoNumero){
    alert("El tercer número es el mayor: "+tercerNumero);
}else{
    alert("Ocurrió un error");
}*/

//Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. (Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, indicar un error).

/*const edad = prompt("Ingrese su edad");
const bebida = prompt("Qué desea tomar? Cerveza, jugo, agua");

if (edad<18 && bebida=="cerveza"){
    alert("No puede tomar alcohol siendo menor de edad");
}else if (edad>18 && bebida=="cerveza"){
    alert("Ya le traigo su cerveza");
    let cuenta = 100;
    alert("Su cuenta es: "+cuenta);
    let pago = prompt("¿Con cuánto va a pagar?");
    if (pago<cuenta){
        alert("su pago es inferior a su cuenta");
    }else{
        vuelto = pago-cuenta;
    }
    alert("Su vuelto es: "+vuelto);
}else if (bebida=="jugo"){
    alert("Ya le traigo su jugo");
    let cuenta = 50;
    alert("Su cuenta es: "+cuenta);
    let pago = prompt("¿Con cuánto va a pagar?");
    if (pago<cuenta){
        alert("su pago es inferior a su cuenta");
    }else{
        vuelto = pago-cuenta;
    }
    alert("Su vuelto es: "+vuelto);
}else if (bebida=="agua"){
    alert("Ya le traigo su agua");
    let cuenta = 50;
    alert("Su cuenta es: "+cuenta);
    let pago = prompt("¿Con cuánto va a pagar?");
    if (pago<cuenta){
        alert("su pago es inferior a su cuenta");
    }else{
        vuelto = pago-cuenta;
    }
    alert("Su vuelto es: "+vuelto);
}*/

//Solicitar al usuario un número de mes y devolver el nombre. (Ej: Ingreso 4 y me devuelve “Abril”)

/*var mes = prompt("Ingrese un número de mes");

switch(parseInt(mes)){
    case 1:
        alert(mes+" Es el mes: Enero");
        break;
    case 2:
        alert(mes+" Es el mes: Febrero");
        break;
    case 3:
        alert(mes+" Es el mes: Marzo");
         break;
    case 4:
        alert(mes+" Es el mes: Abril");
        break;
    case 5:
        alert(mes+" Es el mes: Mayo");
         break;
    case 6:
        alert(mes+" Es el mes: Junio");
        break;
    case 7:
        alert(mes+" Es el mes: Julio");
         break;
    case 8:
        alert(mes+" Es el mes: Agosto");
         break;
    case 9:
        alert(mes+" Es el mes: Septiembre");
        break;
    case 10:
        alert(mes+" Es el mes: Octubre");
         break;
    case 11:
        alert(mes+" Es el mes: Noviembre");
        break;
    case 12:
        alert(mes+" Es el mes: Diciembre");
         break;
    default:
        alert("Ingrese un número de mes válido");
}*/


//Solicitar al usuario su clave de 4 dígitos (que tendremos almacenada en una variable) y el monto a retirar. Si la clave es correcta y el monto mayor al balance, realizar la operación. Sino, mostrar un mensaje de error en caso de ser la clave incorrecta o pedir más dinero del disponible.

/*const clave=prompt("Ingrese su clave");
const balance= 1000000;

if (clave != 1234){
    alert("Su clave es incorrecta")
}else if(clave==1234){
    retiro = prompt("¿Cuánto dinero desea retirar?");
    if (retiro>balance){
        alert("Error, usted no cuenta con tanto dinero :c");
    }else{
        newBalance=balance-retiro;
        alert(retiro+" retirado con éxito");
        alert("Su nuevo balance es: "+newBalance);
    }
}*/

//Solicitar al usuario su día y mes de nacimiento e indicar cual es su signo zodiacal.

/*const dia = prompt("Ingrese dia de nacimiento");
const mes = prompt("Ingrese mes de nacimiento");

if ((dia>=20 && mes==1)||(dia<=18 && mes==2)){
    alert("Acuario");
}else if ((dia>=19 && mes==2)||(dia<=20 && mes==3)){
    alert("Piscis");
}else if ((dia>=21 && mes==3)||(dia<=19 && mes==4)){
    alert("Aries");
}else if ((dia>=20 && mes==4)||(dia<=20 && mes==5)){
    alert("Tauro");
}else if ((dia>=21 && mes==5)||(dia<=20 && mes==6)){
    alert("Géminis");
}else if ((dia>=2 && mes==6)||(dia<=22 && mes==7)){
    alert("Cáncer");
}else if ((dia>=23 && mes==7)||(dia<=22 && mes==8)){
    alert("Leo");
}else if ((dia>=23 && mes==8)||(dia<=22 && mes==9)){
    alert("Virgo");
}else if ((dia>=23 && mes==9)||(dia<=22 && mes==10)){
    alert("Libra");
}else if ((dia>=23 && mes==10)||(dia<=21 && mes==11)){
    alert("Escorpio");
}else if ((dia>=22 && mes==11)||(dia<=21 && mes==12)){
    alert("Sagitario");
}else if ((dia>=22 && mes==12)||(dia<=19 && mes==1)){
    alert("Capricornio");
}else{
    alert("Ingresó un número no válido");
}*/

//Solicitar al usuario que ingrese la hora y su nombre. Si son entre las 12 inclusive y 19 saludar con buenas tardes, entre 19 inclusive y 5 buenas noches, y entre 5 inclusive y 12 buenos días. 

//------------------------error------------------------
/*
const hora = parseFloat(prompt("¿Qué hora es?"));
const nombre = prompt("Ingrese su nombre");

if (hora>=12 && hora<19){
    alert("Buenas tardes "+nombre);
}else if(hora>=19 && hora<5){
    alert("Buenas noches "+nombre);
}else if(hora>=5 && hora<12){
    alert("Buenos días "+nombre);
}
*/
//------------------------error------------------------
