let nombre=prompt('Ingresá tu nombre');
function saludar(nombre){
    alert(`Hola ${nombre}. Bienvenido a AnabiNails`)};
saludar(nombre);

let valorUña;

const uña = prompt(`Seleccione el estilo de uñas que desea:
    1. Semipermanentes
    2. Capping Gel
    3. Soft Gel
    4. Esculpidas`)

    while (uña != "x" && uña != "X") {
        switch (uña) {
            case "1":
                valorUña = 1000;
                break;
            case "2":
                valorUña = 1200;
                break;
            case "3":
                valorUña = 1500;
                break;
            case "4":
                valorUña = 2000;
                break;
            default:
                prompt(`No ingresó una opción válida. Por favor seleccione el estilo de uñas de la siguiente lista:
                1. Semipermanentes
                2. Capping Gel
                3. Soft Gel
                4. Esculpidas`);
                break;
        }break;
    }alert(`El valor de las uñas seleccionada es de $${valorUña}`);

let cantidadUñas = Number(prompt(`Indique cuantos uñas se va a hacer, 1 son 10 uñas, 2 son 20 uñas`))

function subtotalcantidadUñas(cantidadUñas, valorUña) {
    return cantidadUñas * valorUña;
}alert(`Usted seleccionó ${cantidadUñas} uñas`);
alert(`El importe total por la cantidad de uñas es de $${subtotalcantidadUñas(cantidadUñas, valorUña)}`);
console.log(`Subtotal (cantidadUñas): $${subtotalcantidadUñas(cantidadUñas, valorUña)}`);

let valorCombo;

let combo = prompt(`Seleccione el combo que desea agregar
    1. Stickers ($200)
    2. Diseño a mano alzada ($400)
    3. Agregados de adornos varios ($500)
    4. No deseo agregar ningún combo`)


function subtotalCombo(valorUña, cantidadUñas, valorCombo) {
    switch (combo) {
        case "1":
            valorCombo = 200;
            break;
        case "2":
            valorCombo = 400;
            break;
        case "3":
            valorCombo = 500;
            break;
        case "4":
            valorCombo = 0;
            break;
        default:
            prompt(`No ingresó una opción válida. Por favor seleccione una opción de la lista
            1. Stickers ($200)
            2. Diseño a mano alzada ($400)
            3. Agregados de adornos varios ($500)
            4. No deseo agregar ningún combo`);
    }return valorUña * cantidadUñas + valorCombo;
}
alert(`El importe total con el combo agregado es de $${subtotalCombo(valorUña, cantidadUñas, valorCombo)}`);
console.log(`Importe total: $${subtotalCombo(valorUña, cantidadUñas, valorCombo)}`);