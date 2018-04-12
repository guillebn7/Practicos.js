//CALCULA EL DIA DE LA SEMANA CORRESPONDIENTE AL NRO INGRESADO, VALIDANDO EL PARÁMETRO
function calcularDia(nro) {
	if(nroValida(nro)) 
		return diaSemana(nro);
	else
		return tipoError(nro);
}

//DEVUELVE EL DÍA DE LA SEMANA CORRESPONDIENTE AL NRO INGRESADO
function diaSemana(nro) {
		switch (nro){
			case 1:
				return "lunes";
				break;
			case 2: 
				return "martes";
				break;
			case 3: 
				return "miercoles";
				break;
			case 4: 
				return "jueves";
				break;
			case 5: 
				return "viernes";
				break;
			case 6: 
				return "sabado";
				break;
			case 7: 
				return "domingo";
				break;
			}
	}


//FUNCIÓN QUE VALIDA EL INGRESO DEL DÍA (NRO ENTRE 1 Y 7)
	function nroValida(nro){
		var exprRegNroEntero = /^\d*$/; //EXPRESIÓN REGULAR PARA VERIFICAR QUE SE INGRESE UN NRO ENTERO
		if (((1<=nro) && (nro<=7)) && (exprRegNroEntero.test(nro))){
			return true;
		}
		else
			return false;
	}


//FUNCIÒN QUE DEVUELVE EL TIPO DE ERROR QUE SE COMETIÓ AL INGRESAR EL DÍA.
	function tipoError(nro) {
		var expRegLetra = /^[a-zA-Z]/;
		if(expRegLetra.test(nro)) //VERIFICA SI ES UNA LETRA 
			return("No se permite ingresar una letra");
		else if (nro<1) //VERIFICA SI ES MENOR A 1
			return("El numero es menor a 1, ingrese un nro entre 1 y 7");
		else if (nro>7) //VERIFICA SI ES MAYOR A 7
			return("El numero es mayor a 7, ingrese un nro entre 1 y 7");	
		else //CUALQUIER OTRA OPCIÓN: DECIMALES, CARACTERES, PALABRAS, ETC.
			return "ERROR, NO SE PERMITEN DECIMALES NI OTROS CARACTERES QUE NO SEA UN NUMERO ENTRE 1 Y 7" 	
	}


console.log(calcularDia(4.7));