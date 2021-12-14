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

//------------------------error------------------------
/*const medida_inicial = prompt("Ingrese una medida en metros");
const medida_inicial_en_pies = parseFloat(medida_inicial)*3.2808399;
const medida_inicial_en_pulgadas = parseFloat(medida_inicial)*39.3700787;
const medida_inicial_en_centimetros = parseFloat(medida_inicial)*100;

if (medida_inicial.isNan() == false){
    alert(medida_inicial+" "+"metros"+" "+"en pies es:"+" "+medida_inicial_en_pies);
    alert(medida_inicial+" "+"metros"+" "+"en pulgadas es:"+" "+medida_inicial_en_pulgadas);
    alert(medida_inicial+" "+"metros"+" "+"en centimetros es:"+" "+medida_inicial_en_centimetros);
}else{
    alert("La medida ingresada no es un número");
}*/
//------------------------error------------------------

//Solicitar al usuario su edad. Si es menor de 18, decir que es menor de edad, sino decir que es mayor.

/*const edad = prompt("Ingrese su edad");

if (edad<18){
    alert("Usted es menor de edad")
}else{
    alert("Usted es mayor de edad")
}*/

//Contexto: Una heladería. Solicitar al usuario sus sabores en un solo input. Luego preguntar si quiere cobertura de chocolate. Si dice Sí, mostrar el valor del helado 180 con el pedido completo: “Su helado sabor …. con cobertura de chocolate cuesta $180”. En caso de que no la requiera, será lo mismo pero sin cobertura de chocolate y el valor es de $150.

//------------------------error------------------------
/*const sabores = prompt("Ingrese todos los sabores que desea");
const cobertura = prompt("¿Quiere cobertura de chocolate?");

if (cobertura = si){
    alert("Su helado sabor "+sabores+" con cobertura de chocolate cuesta $180")
}else{
    alert("Su helado sabor "+sabores+" sin cobertura de chocolate cuesta $150")
}*/
//------------------------error------------------------





//Mejorar el ejercicio 1 de Variables: Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos. Informar al usuario si el número resultante es par o impar.










//Solicitar al usuario un número e indicar si es positivo, negativo o cero.










//Solicitar al usuario que ingrese un monto. Si el monto es mayor a 2000 que aplique un descuento del 10%. Mostrar el total a pagar.










//Solicitar al usuario que ingrese una cadena de texto y luego un una posición. Indicar si el dígito de esa posición es vocal o no lo es. (Puede ser consonante, espacio, comilla, etc.)










//Solicitar al usuario que ingrese una nota del 1 al 10. Si está entre 1 y 3 responder: Aplazado, si está entre 4 y 5 responder: Reprobado , y 6 o más aprobado. 










//Solicitar al usuario dos números e indicar cual es el mayor o si son iguales.










//Solicitar al usuario que indique un mes (del 1 al 12) e indicar si tiene 30 días, 31 días o 28/29 días.










//Solicitar al usuario que ingrese 3 números e indicar cual es el mayor.










//Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. (Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, indicar un error).










//Solicitar al usuario un número de mes y devolver el nombre. (Ej: Ingreso 4 y me devuelve “Abril”)










