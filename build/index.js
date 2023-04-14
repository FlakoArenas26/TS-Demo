"use strict";
// Esto es un comentario en TS
/**
 * Documentación
 * Multilínea
 */
/* Imprimiendo las cadenas "Hola" y "Adiós" a la consola. */
console.log("Hola ");
console.log("Adiós ");
// Declaración de Variables
/* Este código declara e inicializa variables usando diferentes tipos de datos en TypeScript. También
demuestra cómo usar la interpolación de cadenas para imprimir variables dentro de una cadena.
Además, muestra cómo usar el tipo `cualquiera` para permitir que una variable cambie su tipo y cómo
usar la palabra clave `const` para declarar una variable constante. Finalmente, imprime el valor de
la variable `error` utilizando la interpolación de cadenas. */
var nombre = 'Rafa';
console.log("Hola " + nombre);
console.log("¿Qué tal", nombre, "?");
console.log(`¿Cómo han ido las vacaciones, ${nombre} ?`);
let email = 'rafa@gmail.com'; //Variable de ámbito local
console.log(`Email de ${nombre} es ${email}`);
const PI = 3.1416;
var apellidos = "Arenas"; // Tipo any hace que la variable pueda cambiar de tipo
apellidos = 3;
var error;
error = false;
console.log(`Hay error: ${error}`);
// BuiltIn Types: number, string, boolean, void, null y undefined
/* Este código declara e inicializa tres variables `a`, `b` y `c` con tipos `string`, `boolean` y
`number` respectivamente. También demuestra cómo declarar un arreglo de cadenas `listaTareas` y un
arreglo de tipos mixtos `valores` usando la sintaxis de tipos de unión `(cadena | número |
booleano)`. */
let a, b, c; // Instancia 3 variables sin valor inicial
a = "TypeScript";
b = true;
c = 8.9;
// Tipos más complejos
let listaTareas = ["Tarea 1", "Tarea 2"];
// Combinación de tipos en listas
let valores = [false, "Hola", true, 56];
// Enumerados
/* Este código define dos enumeraciones, `Estados` y `PuestoCarrera`, que se utilizan para representar
diferentes estados o posiciones. `Estados` tiene tres valores posibles: "Completado", "Incompleto" y
"Pendiente", cada uno con su correspondiente código de una sola letra. `PuestoCarrera` tiene tres
valores posibles: "Primero", "Segundo" y "Tercero", cada uno con su número correspondiente. Luego,
el código declara dos variables, `estadoTareas` y `PuestoMaraton`, a las que se les asignan valores
de las enumeraciones `Estados` y `PuestoCarrera`, respectivamente. Estas variables se pueden usar
para representar el estado o la posición de diferentes objetos o entidades en el programa. */
var Estados;
(function (Estados) {
    Estados["Completado"] = "C";
    Estados["Incompleto"] = "I";
    Estados["Pendiente"] = "P";
})(Estados || (Estados = {}));
var PuestoCarrera;
(function (PuestoCarrera) {
    PuestoCarrera[PuestoCarrera["Primero"] = 1] = "Primero";
    PuestoCarrera[PuestoCarrera["Segundo"] = 2] = "Segundo";
    PuestoCarrera[PuestoCarrera["Tercero"] = 3] = "Tercero";
})(PuestoCarrera || (PuestoCarrera = {}));
let estadoTareas = Estados.Completado;
let PuestoMaraton = PuestoCarrera.Segundo;
// Podemos crear variables que sigan la interface Tarea
let tarea1 = {
    nombre: "Tarea1",
    estado: Estados.Pendiente,
    urgencia: 10,
};
console.log(`Tarea: ${tarea1.nombre}`);
// Asignación múltiple de variables
let miTarea = {
    titulo: "Mi tarea",
    estado: Estados.Completado,
    urgencia: 1,
};
// Declaración 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;
// Declaración con factor de propagación
let { titulo, estado, urgencia } = miTarea;
/* Este código crea tres matrices, `listaCompraLunes`, `listaCompraMartes` y `listaCompraMiercoles`,
que representan una lista de compras para el lunes, martes y miércoles respectivamente. La matriz
`listaCompraMartes` utiliza el operador de propagación (`...`) para copiar el contenido de la matriz
`listaCompraLunes` y agregar dos elementos adicionales, "Pan" y "Huevos". La línea comentada `// let
listaCompraSemana: [...listaCompraLunes, ...listaCompraMiercoles]` sugiere que el autor puede haber
estado considerando crear una cuarta matriz que combine los elementos de las tres matrices
utilizando el operador de propagación. */
// En listas
let listaCompraLunes = ["Leche", "Patatas"];
let listaCompraMartes = [...listaCompraLunes, "Pan", "Huevos"];
let listaCompraMiercoles = ["Carane", "Pescado"];
// let listaCompraSemana: [...listaCompraLunes, ...listaCompraMiercoles]
// En Objetos
let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bearer1283612783"
};
let nuevoEstado = Object.assign(Object.assign({}, estadoApp), { session: 4 });
// Cambiar un valor por propagación
let coche = {
    nombre: "Audi",
    precio: 45000,
    anio: 2010
};
// Condicionales
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`);
// If - else
/* Estos son ejemplos de sentencias condicionales en TypeScript. */
if (error) {
    console.log("Hay un error");
}
else {
    console.log("No hay un error");
}
// If - else if - else
if (coche.anio < 2010) {
    console.log(`Coche: ${coche.nombre} es viejo`);
}
else if (coche.anio === 2010) {
    console.log(`Coche: ${coche.nombre} es del 2010`);
}
else {
    console.log(`Coche: ${coche.nombre} es nuevo`);
}
// Switch
switch (tarea1.estado) {
    case Estados.Completado:
        console.log("La tarea está completada");
        break;
    case Estados.Incompleto:
        console.log("La tarea está incompletada");
        break;
    case Estados.Completado:
        console.log("La tarea está pendiente");
        break;
    default:
        break;
}
// try {
// }catch (error){
// }
// Bucles
/* Este código está creando una matriz de objetos llamada `listaTareasNueva` y cada objeto tiene las
propiedades `nombre`, `estado` y `urgencia`. Luego demuestra dos formas de recorrer la matriz e
imprimir el índice y el nombre de cada tarea usando un bucle for y un bucle forEach. */
let listaTareasNueva = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2,
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 0,
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Incompleto,
        urgencia: 15,
    }
];
// For clásico
/* Estos son ejemplos de bucles en TypeScript. El primer bucle es un bucle for clásico que itera sobre
una matriz llamada `listaTareasNueva` e imprime el índice y el nombre de cada tarea mediante la
interpolación de cadenas. El segundo ciclo es un ciclo forEach que logra el mismo resultado pero con
una sintaxis más concisa. Ambos bucles demuestran cómo iterar sobre una matriz y acceder a sus
elementos. */
for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];
    console.log(`${index} - ${tarea.nombre}`);
}
// Foreach
listaTareasNueva.forEach((tarea, index) => {
    console.log(`${index} - ${tarea.nombre}`);
});
// // For in
// for (const tarea in tarea1){
//     if (Object.prototype.hasOwnProperty.call(tarea1, key)){
//         const tarea2 = tarea1[key];
//     }
// }
// Bucles While
/* Este código está usando un bucle while para verificar si la propiedad `estado` del objeto `tarea1`
no es igual al valor `Estados.Completado`. Si no está completa, comprueba si la propiedad `urgencia`
es igual a 20. Si lo está, pone la propiedad `estado` a `Estados.Completado`. Si no es así,
incrementa la propiedad `urgencia` en 1. Este bucle continuará hasta que la propiedad `estado` se
establezca en `Estados.Completado`. */
while (tarea1.estado != Estados.Completado) {
    if (tarea1.urgencia == 20) {
        tarea1.estado = Estados.Completado;
        break;
    }
    else {
        tarea1.urgencia++;
    }
}
/* Este es un bucle do-while que incrementa la propiedad `urgencia` de `tarea1` en 1 y establece su
propiedad `estado` en `Estados.Completado` hasta que la propiedad `estado` se establece realmente en
`Estados.Completado`. Este bucle siempre se ejecutará al menos una vez, incluso si la condición es
inicialmente falsa. */
// do {
//     tarea1.urgencia = ++;
//     tarea1.estado = Estados.Completado;
// }while(tarea1.estado !== Estados.Completado);
