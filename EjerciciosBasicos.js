// ================================
// Ejercicio 1 crear una variable tipada de tipo number
var edad = 17;
// ================================
// Ejercicio 2 crear una variable tipada de tipo string
var nombre = "Nicolas";
// ================================
// Ejercicio 3 crear una variable tipada de tipo boolean
var activo = true;
// ================================
// Ejercicio 4 crear una funcion que reciba dos numeros y retorne la suma
function sumar(a, b) {
    return a + b;
}
// ================================
// Ejercicio 5 crear una funcion que reciba un nombre y retorne un saludo
function saludar(nombre) {
    return "Hola " + nombre;
}
// ================================
// Ejercicio 6 crear un array tipado de numeros
var numeros = [1, 2, 3, 4, 5];
// ================================
// Ejercicio 7 crear un array tipado de strings
var lenguajes = ["JavaScript", "TypeScript", "Go"];
// ================================
// Ejercicio 8 crear una funcion que recorra un array y muestre los valores
function mostrarNumeros(lista) {
    lista.forEach(function (numero) {
        console.log(numero);
    });
}
// ================================
// Ejercicio 9 crear un objeto con tipos definidos
var usuario = {
    nombre: "Nicolas",
    edad: 17
};
// ================================
// Ejercicio 11 crear un objeto usando un type
var producto = {
    nombre: "Teclado",
    precio: 100
};
// ================================
// Ejercicio 13 crear un objeto usando una interface
var persona = {
    nombre: "Carlos",
    edad: 20
};
// ================================
// Ejercicio 14 usar union types para permitir dos tipos
var id;
id = 1;
id = "ABC123";
// ================================
// Ejercicio 15 crear una funcion que acepte union types
function imprimirId(id) {
    console.log(id);
}
var estado = "activo";
// ================================
// Ejercicio 17 crear un enum para representar roles
var Rol;
(function (Rol) {
    Rol[Rol["Admin"] = 0] = "Admin";
    Rol[Rol["User"] = 1] = "User";
    Rol[Rol["Guest"] = 2] = "Guest";
})(Rol || (Rol = {}));
// ================================
// Ejercicio 18 usar un enum en una variable
var rolUsuario = Rol.Admin;
// ================================
// Ejercicio 19 crear una funcion generica basica
function retornarValor(valor) {
    return valor;
}
// ================================
// Ejercicio 20 usar una funcion generica con diferentes tipos
var numeroGenerico = retornarValor(10);
var textoGenerico = retornarValor("Hola");
