/* crear una funcion para validar una tarjeta*/ 
/*Tarjeta de crédito válida Crea una web que pida, por medio de un prompt(),
 el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn. 
 Lee este blog que explica cómo funciona el algoritmo de Luhn.
Consideraciones Específicas

Tu código debe estar compuesto por 1 función: isValidCard
El usuario no debe poder ingresar un campo vacío*/
function validCard(numerodetarjeta ){ // funcion principal 
	var numberCard = prompt("Ingresa tu numero de tarjeta") // El usuario al abrir la pagina debera ingresar el numero de tarjeta.
	for (var i = 0; i < numberCard.length; i++) { // Por medio de un for el numero se recorre partiendo desde la  posicion 0 hasta llegar al largo total.
		var inversa= numberCard.pop();// la variavle invera quita la ultima pocicion .
		numberCard.splice(i, 0, inversa);// aca por medio de splice se va agregando el ultimo numero pero en la primera posicion.
	}
	validCard(numerodetarjeta); // aca los numeros ya estan ordenandos al reves para poder comenzar a generar
}
 /*function Codigo(numbercard){
 	var mod =0; 
    var formula= numbercard % 2; 
  for(var i=0; i < numbercard.length; i++) { 
  var toWrite = parseInt(numbercard.charAt(i)) 
  if(i % 2 == formula)
  toWrite *= 2;
   if(toWrite > 9) toWrite -= 9; mod += toWrite; } 
   }return (mod % 10) == 0;
}*/

   
   