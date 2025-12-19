// ================================
// Ejercicio 1 crear una variable tipada de tipo number
let edad: number = 17

// ================================
// Ejercicio 2 crear una variable tipada de tipo string
let nombre: string = "Nicolas"

// ================================
// Ejercicio 3 crear una variable tipada de tipo boolean
let activo: boolean = true

// ================================
// Ejercicio 4 crear una funcion que reciba dos numeros y retorne la suma
function sumar(a: number ,b: number): number {
    return a + b
}

// ================================
// Ejercicio 5 crear una funcion que reciba un nombre y retorne un saludo
function saludar(nombre: string): string {
    return "Hola " + nombre
}

// ================================
// Ejercicio 6 crear un array tipado de numeros
let numeros: number[] = [1, 2, 3, 4, 5]

// ================================
// Ejercicio 7 crear un array tipado de strings
let lenguajes: string[] = ["JavaScript", "TypeScript", "Go"]

// ================================
// Ejercicio 8 crear una funcion que recorra un array y muestre los valores
function mostrarNumeros(lista: number[]): void {
    lista.forEach(numero => {
        console.log(numero)
    })
}

// ================================
// Ejercicio 9 crear un objeto con tipos definidos
let usuario: { nombre: string ,edad: number } = {
    nombre: "Nicolas",
    edad: 17
}

// ================================
// Ejercicio 10 crear un type para definir la estructura de un objeto
type Producto = {
    nombre: string
    precio: number
}

// ================================
// Ejercicio 11 crear un objeto usando un type
let producto: Producto = {
    nombre: "Teclado",
    precio: 100
}

// ================================
// Ejercicio 12 crear una interface para un usuario
interface Persona {
    nombre: string
    edad: number
}

// ================================
// Ejercicio 13 crear un objeto usando una interface
let persona: Persona = {
    nombre: "Carlos",
    edad: 20
}

// ================================
// Ejercicio 14 usar union types para permitir dos tipos
let id: number | string
id = 1
id = "ABC123"

// ================================
// Ejercicio 15 crear una funcion que acepte union types
function imprimirId(id: number | string): void {
    console.log(id)
}

// ================================
// Ejercicio 16 usar literal types para valores especificos
type Estado = "activo" | "inactivo"
let estado: Estado = "activo"

// ================================
// Ejercicio 17 crear un enum para representar roles
enum Rol {
    Admin,
    User,
    Guest,
}

// ================================
// Ejercicio 18 usar un enum en una variable
let rolUsuario: Rol = Rol.Admin

// ================================
// Ejercicio 19 crear una funcion generica basica
function retornarValor<T>(valor: T): T {
    return valor
}

// ================================
// Ejercicio 20 usar una funcion generica con diferentes tipos
let numeroGenerico = retornarValor<number>(10)
let textoGenerico = retornarValor<string>("Hola")

