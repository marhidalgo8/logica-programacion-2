function convertir() {

    let input = document.getElementById("celsius").value;
    let unidad = document.getElementById("unidad").value;
    let resultado = document.getElementById("resultado");

    if (input.trim() === "") {
        resultado.innerHTML = "Error: Debes ingresar un valor.";
        return;
    }

    let celsius = Number(input);

    if (isNaN(celsius)) {
        resultado.innerHTML = "Error: El dato ingresado no es numérico.";
        document.getElementById("celsius").value = "";
        return;
    }

    let kelvin = celsius + 273.15;
    let fahrenheit = (celsius * 9/5) + 32;

    // Evaluar qué opción eligió el usuario
    if (unidad === "kelvin") {
        resultado.innerHTML = `Grados Kelvin: ${kelvin.toFixed(2)}`;
    } 
    else if (unidad === "fahrenheit") {
        resultado.innerHTML = `Grados Fahrenheit: ${fahrenheit.toFixed(2)}`;
    } 
    else {
        resultado.innerHTML = `
            Grados Kelvin: ${kelvin.toFixed(2)} <br>
            Grados Fahrenheit: ${fahrenheit.toFixed(2)}
        `;
    }

    console.log("Celsius:", celsius);
    console.log("Kelvin:", kelvin);
    console.log("Fahrenheit:", fahrenheit);
}//function
