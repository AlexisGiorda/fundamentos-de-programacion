//0) Solicitar al usuario su nombre y mostrarlo por alert. Luego Mostrar un alert que salude diciendo Hola y el nombre de la persona. Luego solicitar el apellido y que salude por alert con el nombre completo (Ej: Hola Florencia Andres).

//const nombre = prompt ("¿Cuál es tu nombre?");
//alert ("Hola"+" "+nombre);

//const apellido = prompt ("¿Cuál es tu apellido?");
//alert ("Hola"+" "+nombre+" "+apellido);

//1) Solicitar al usuario dos números y mostrar por alert el resultado de la suma de ambos.

//const primerNumero = prompt("Ingrese el primer número");
//const segundoNumero = prompt("Ingrese el segundo número");
//const suma = parseFloat(primerNumero) + parseFloat(segundoNumero);

//alert("La suma de sus dos numeros es:"+" "+suma);

//2) Solicitar al usuario la edad que cumple o cumplió este año y calcular en qué año nació y mostrar un mensaje por alert (Ej: Usted nació en 1974)

//const edad = prompt("¿Cuántos años tenés?");
//const añoNacimiento = parseInt(2021)-parseInt(edad);

//alert("Usted nació en el año:"+" "+añoNacimiento);

//3) Mostrar al usuario su balance de cuenta (inventar un número de cuenta). Consultar cuánto dinero desea retirar y mostrar el nuevo balance.

//alert("Su balance de cuenta es de $1.000.000");
//const dinero_a_retirar = prompt("¿Cuánto dinero desea retirar?");
//const balance = 1000000;
//const nuevo_balance = parseFloat(balance)-parseFloat(dinero_a_retirar);
//alert("Su nuevo balancde es:"+" "+nuevo_balance);

//4) Solicitar al usuario 3 notas, calcular el promedio y mostrarlo por alert.

//const nota_uno = prompt("Ingrese la primer nota");
//const nota_dos = prompt("Ingrese la segunda nota");
//const nota_tres = prompt("Ingrese la tercer nota");
//const suma_notas = parseFloat(nota_uno)+parseFloat(nota_dos)+parseFloat(nota_tres);
//const promedio = parseFloat(suma_notas)/3;

//alert("El promedio de sus notas es de:"+" "+promedio);

//5) Crear un conversor de medidas. Pedirle al usuario que ingrese una medida en metros y pasarlo a pies, centímetros y pulgadas. Mostrar por alert los tres resultados.

//const medida_inicial = prompt("Ingrese una medida en metros");
//const pies = parseFloat(3.2808399);
//const pulgadas = parseFloat(39.3700787);
//const centimetros = parseFloat(100);
//const medida_inicial_en_pies = parseFloat(medida_inicial)*parseFloat(pies);
//const medida_inicial_en_pulgadas = parseFloat(medida_inicial)*parseFloat(pulgadas);
//const medida_inicial_en_centimetros = parseFloat(medida_inicial)*parseFloat(centimetros);


//alert(medida_inicial+" "+"metros"+" "+"en pies es:"+" "+medida_inicial_en_pies);
//alert(medida_inicial+" "+"metros"+" "+"en pulgadas es:"+" "+medida_inicial_en_pulgadas);
//alert(medida_inicial+" "+"metros"+" "+"en centimetros es:"+" "+medida_inicial_en_centimetros);

//6) Solicitar al usuario dos números y mostrar el resultado de la suma. Luego solicitar al usuario un tercer número y multiplicarlo por el resultado anterior. Mostrar el resultado final.

//const numeroUno = prompt("Ingrese el primer número");
//const numeroDos = prompt("Ingrese el segundo número");
//const suma = parseFloat(numeroUno)+parseFloat(numeroDos);

//alert("Su suma es: "+suma);

//const numeroTres = prompt("Ingrese un número para multiplicar el resultado anterior");
//const multiplicacion = parseFloat(suma)*parseFloat(numeroTres);

//alert("Su multiplicacion es: "+multiplicacion);

//7) Armar un conversor de minutos a segundos. Solicitar al usuario un número de minutos y mostrar por alert la cantidad de segundos a la que equivale.

//const minutos = prompt("Ingrese los minutos a convertir en segundos");
//const segundos = parseFloat(minutos)*60;

//alert(minutos+" "+"minutos equivalen a: "+segundos+" segundos")

//8) Solicitar al usuario la medida de la base y de la altura de un rectángulo y devolver el área.

//const base = prompt("Ingrese la base");
//const altura = prompt("Ingrese la altura");
//const area = parseFloat(base)*parseFloat(altura);

//alert("El area del rectangulo es: "+area);

//9) Solicitar al usuario la medida de la base y de la altura de un triángulo equilátero y devolver el área.

//const base = prompt("Ingrese la base");
//const altura = prompt("Ingrese la altura");
//const area = (parseFloat(base)*parseFloat(altura))/2;

//alert("El area del triangulo es: "+area);

//10) Solicitar al usuario un monto y un número de descuento. Mostrar al usuario cuánto es el precio final con el descuento aplicado.

//const monto = parseFloat(prompt("Ingrese un monto"));
//const descuento = parseFloat(prompt("Ingrese el descuento (solo el numero)"));
//const porcentaje = (100-descuento)/100;
//const total = monto*porcentaje;

//alert("Su precio final es de: "+total);

//11) Solicitar al usuario su nombre y la edad que cumple o cumplió en 2021, y mostrar un mensaje con alert diciendo "Hola (nombre) usted nació en el año (año)"

//const nombre = prompt("¿Cuál es tu nombre?");
//const edad = parseInt(prompt("¿Cuántos años cumplís/cumpliste en 2021?"));
//const añoNacimiento = (parseInt(2021) - edad);

//alert("Hola "+nombre+" usted nació en el año "+añoNacimiento);

//12) Crear un conversor de Celsius a Farenheit. Solicitar al usuario su nombre y una temperatura y mostrar por alert su equivalente en Farenheit junto con un mensaje que incluya ambos datos. 

//const nombre = prompt("¿Cómo te llamas?");
//const temperaturaCelsius = parseFloat(prompt("Ingrese una temperatura en celcius"));
//const temperaturaFarenheit = (((9/5)*temperaturaCelsius)+32);

//alert("Hola "+nombre+" la temperatura ingresada en farenheit es: "+temperaturaFarenheit);

//13) Realizar el mismo ejercicio que el anterior pero al revés, de Farenheit a Celsius.

//const nombre = prompt("¿Cómo te llamas?");
//const temperaturaFarenheit = parseFloat(prompt("Ingrese una temperatura en farenheit"));
//const temperaturaCelsius = ((temperaturaFarenheit-32)*(5/9));

//alert("Hola "+nombre+" la temperatura ingresada en Celsius es: "+temperaturaCelsius);

//14) Solicitar al usuario un número y almacenarlo en una variable. Sumarle 5 , multiplicar el resultado por 10 y sacar el resto de su división por 3. Mostrar el resultado sin comas.

//const numeroInicial = parseFloat(prompt("Ingrese un número"));
//const numeroSumado = numeroInicial+5;
//const numeroMultiplicado = numeroSumado*10;
//const numeroDivision = numeroMultiplicado%3;
//const numeroFinal = parseInt(numeroDivision);

//alert("Su resultado es: "+numeroFinal);

//-----------------------------BONUS-----------------------------

//0) Solicitar dos números y mostrar la suma de sus cifras. (Ejemplo: 15 y 29, mostrar 1529).

//const primerNumero = prompt("Ingrese un numero");
//const segundoNumero = prompt("Ingrese otro numero");

//alert(primerNumero+segundoNumero);

//1) Crear un conversor de años a segundos. 

//const años = parseFloat(prompt("Ingrese una cantidad de años"));
//const segundos = años*31536000;

//alert("Los años ingresados en segundos equivalen a: "+segundos);

//1.1)Solicitar al usuario una cantidad de días y mostrar su equivalente en segundos por alert o alert, a elección. (Pueden probar también con números con coma :) 2,5 años por ejemplo)

//const dias = parseFloat(prompt("Ingrese una cantidad de días"));
//const segundos = dias*86400;

//alert("Los días ingresados en segundos equivalen a: "+segundos);

//2) Solicitar al usuario que ingrese la cantidad de kilómetros que desea recorrer con su motocicleta. A continuación solicitar la velocidad promedio a la que desea ir en kilómetros por hora. Calcular el tiempo estimado en llegar al destino en minutos.  A tener en cuenta: la velocidad se calcula en metros sobre segundos!)

