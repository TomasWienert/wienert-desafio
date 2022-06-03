/* Hago el ciclo para desarrollar un contador regresivo hasta cero desde el valor que desee el usuario */

let entrada = parseInt(prompt("Ingrese el valor inicial deseado para la cuenta regresiva"))

if (entrada <= 3) {
    alert("Que valor bajo, apenas si se va a ver algo")
} else if (entrada <= 10) {
    alert("Elegiste el valor ideal para probar la cuenta regresiva de entrada la pagina")
} else {
    alert("la cuenta va a ser eterna....")
}

for (let i = entrada; i >= 0; i = i - 1) {
    alert(i);
}

let mesNacimiento = prompt("¿En que mes naciste? A continuación te vamos a dar un dato interesante (usa solo minúsculas)")

while (mesNacimiento === "") {
    alert("Este dato te puede cambiar la vida, ¿no te gustaría conocerlo?")
    mesNacimiento = prompt("¿En que mes naciste? (usa solo minúsculas)")
}

while (mesNacimiento !== "") {
    switch (mesNacimiento) {
        case "enero":
            alert("Según el signo del zodíaco, tu piedra protectora es el granate almandino")
            break;
        case "febrero":
            alert("Según el signo del zodíaco, tu piedra protectora es la amatista")
            break;
        case "marzo":
            alert("Según el signo del zodíaco, tu piedra protectora es la aguamarina")
            break;
        case "abril":
            alert("Según el signo del zodíaco, tu piedra protectora es el diamante")
            break;
        case "mayo":
            alert("Según el signo del zodíaco, tu piedra protectora es la esmeralda")
            break;
        case "junio":
            alert("Según el signo del zodíaco, tu piedra protectora es la de luna")
            break;
        case "julio":
            alert("Según el signo del zodíaco, tu piedra protectora es el rubí")
            break;
        case "agosto":
            alert("Según el signo del zodíaco, tu piedra protectora es el peridoto")
            break;
        case "septiembre":
            alert("Según el signo del zodíaco, tu piedra protectora es el zafiro de ceilán")
            break;
        case "octubre":
            alert("Según el signo del zodíaco, tu piedra protectora es el ópalo noble blanco")
            break;
        case "noviembre":
            alert("Según el signo del zodíaco, tu piedra protectora es el citrino amarillo")
            break;
        case "diciembre":
            alert("Según el signo del zodíaco, tu piedra protectora es la turquesa")
            break;
        default:
            alert("error de entrada")
            break;
    }
    if (mesNacimiento !== "enero" && mesNacimiento !== "febrero" && mesNacimiento !== "marzo" && mesNacimiento !== "abril" && mesNacimiento !== "mayo" && mesNacimiento !== "junio" && mesNacimiento !== "julio" && mesNacimiento !== "agosto" && mesNacimiento !== "septiembre" && mesNacimiento !== "octubre" && mesNacimiento !== "noviembre" && mesNacimiento !== "diciembre" && mesNacimiento === "") {
        mesNacimiento = prompt("Ingrese nuevamente su mes de nacimiento");
    } else{
        break;
    }
}

let nombre = prompt("¿Cuál es tu nombre?")

while (nombre === "") {
    alert("vamos, ingresa tu nombre")
    nombre = prompt("¿Cuál es tu nombre?")
}
alert("Bienvenido al primer desafío del curso de JavaScript " + nombre + ", a continuación se le pedirá la clave de ingreso:")


/* Luego de terminar la cuenta regresiva pido el codigo de ingreso a la pagina que es: Coder */

let clave = prompt("Por último, ingrese el código de entrada a la página")

while (clave !== "Coder") {
    alert("La clave ingresada es incorrecta")
    clave = prompt("Ingrese el código de entrada a la página")
}