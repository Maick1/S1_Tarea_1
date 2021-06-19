//Sintaxis de JS, variables y tipos de  datos
console.log("Funcionando...")
var numero = 10 
let num1; //undefined
let num2= null //nulo
let entero = 10
let decimal = 1.2
let string = "Hola Mundo"
let booleano = false
let fecha = new Date()
let dd = fecha.getDate(),
    mm = fecha.getMonth() + 1
    aa = fecha.getFullYear(),
    hoy = `${aa}-${mm}-${dd}`
const pi = 3.1416 // constante
/* console.log("numero1 =", num1)
console.log('Numero2 = ${num2}')
console.log('Fecha de hoy=${fecha}')
console.log(hoy) */

//Arreglos, Json y Objetos

let numeros = [1,2,3,4,5,6,7];
let colors = ["Amarillo","rojo","verde","Azul"];

const json = {
    "Nombres": ["Jenniffer", "Sofia","Genesis"],
    "Generos": "Femenino"
            };

const estudiante = {
    nombre: 'Michael',
    genero: 'Masculino',
    juegos: ['Ciclismo','Volleyball','HandBall'],
    Conocimientos: {
        lenguajes: [
            'visual basic','Python','c++',
        ],
        Materias:{Nivel1:
        'Logica', Nivel2: 'POO',
         Nivel3: 'POOI' }  
    }
};
/* json.genero = "F"
estudiante.nombre= "Michael"
estudiante.edad = 22
console.log('Json',json,json.genero);
console.log('Objeto',estudiante.lenguajes[1],
estudiante.Conocimientos.Materias.Nivel1); */


// Estructuras de Control 
let n1 = 5
let n2 = 6
if (num1 === undefined)
    //console.log(`${num1}= undefined`);
if (num2 === null)
    //console.log(`${num2}= null`);

if (n1 == 0){
    console.log(n1);
} else if (n1 === n2) {
    //console.log(`${n1}=${n2}`);
} else{
    //console.log(`${n1}!=${n2}`);
} 

let ne= 5
let rec = ne % 0;
switch(rec) {
    case 0:
        //console.log(`${ne} El Numero es Positivo`);
        break;
    case 1:
        //console.log(`${ne} El Numero es Negativo`);
        break;
    
    default:
        if (isNaN(rec))
            //console.log(`${rec}= Error...`);
        break;
}
//console.log (`Salir del Switch`)

// Bucles Incremento (++)
// Ciclo While
let incr= 0
//console.log("Bucle While",colors)
while (incr < colors.length && colors[incr] != "Red"){
    //console.log(inc, colors[incr])
    incr= incr + 1
}

//Bucle For Incrementos y decrementos
//console.log("Recorrido por Incremento", colors);
for (let i = 0; i < colors.length; i++) {
    //console.log(i, colors[i]);
}

//in 
//console.log("Recorrido for in",colors)
for (let j in colors){
    //console.log(j, colors[j])
}
 // of
 //console.log("Recorrido por of", colors)
 for (let col of colors){
     //console.log(col)
}

let nombre= "Michael"
for (let car of nombre){
    //console.log(car)
}

const Personas = [
    {"Nombre": "Cesar", "Apellidos":"Angulo"},
    {"Nombre": "Maria", "Apellidos":"Espinoza"},
    {"Nombre": "Maite", "Apellidos":"Severenda"}
]
console.log("of");
for (let pers of Personas) {
    console.log(pers,pers.Nombre)
}

//Recorrer un Objeto Iterable
//Foreach
console.log("Foreach");
Personas.forEach(person => {
    if (personalbar.nombre != "Maria") 
    console.log(person.nombre)
})

//Map
const persons = Personas.map(person => person.Nombre)
console.log("Map",persons);

//Filter
const pers = Personas.filter(person => person.Nombre != "Maite")
console.log("filter",pers);

//Find
const onepeople = Personas.find(person => person.Nombre === "Maite")
console.log("Find",onepeople);

//Funciones
function sumar(){
    console.log (7+5);
}
sumar()

const suma = () => console.log("Arrow Funcion", (9+10));
suma ()

//Multiplicar ----
function multiplicar (n1,n2){
    return n1 * n2
}
let respuesta = multiplicar (17,3)
console.log("Multiplicacion Sin Arrow",respuesta);

//Arrow Funcion
const multipli = (nu1,nu2 ) => nu1 * nu2 
console.log ("Multiplicacion Arrow: ",multipli(32,4));

//Division ----
function dividir (nu1, nu2=4){
    let resp = 0
    try{
        resp = nu1 / nu2
    } catch (e) {
        console.log ("Error: ", e.message)
    }
    return resp
}

resp = dividir(8)
console.log("La division sin Arrow es: ",resp);
//resp = dividir(10,2)
//console.log("Division es: ",resp);

//con Arrow
const divi = (num1,num2=4) =>{
    let resp = 0
    try{
        resp = num1 / num2
    }catch (e) {
        console.log ("Error: ", e.message)
    }
    return resp
}
console.log ("Division con Arrow",divi(20));

//FECTH. consume api(respuesta del server)
//Api bayas de Pokemon

fetch ('https://pokeapi.co/api/v2/berry/')
    .then(res => res.json())
    .then (datos =>{
        //console.log (datos.results)
        datos.results.forEach(nom=>                                                                                                            console.log(nom.name,nom.url))
    })
    .catch(error => console.log("Error del Api: ", error))

//Async Wait: Devuelve objewto asincronico
const obtenerDatos = async () =>{
    try{
        const resp = await                                                                                                                   fetch('https://pokeapi.co/api/v2/berry/')
        const datos = await resp.json()
        //console.log("-----------Async Await---------------");
        datos.results.forEach(nom=>                                                                                                          console.log(nom.name,nom.url))
    }catch (error){
        //console.log("Error Api con ASync: ", error)
    }
}
obtenerDatos ()
let contenido = document.getElementById  ('Principal')
let variable = document.getElementById ('variable')

console.log (contenido)
console.log (variable)
variable.innerHTML = `Enteros, Decimales, String, Boleanas, Fechas`;
variable.style.color = "white"
variable.style.background = "#111"
console.log(variable);
let concepto = document.querySelector('.concepto')
console.log(concepto);
concepto.innerHTML = "Area de Memoria"

//QuerySelector
let conceptos = document.querySelectorAll('.concepto')
let cont = 1
conceptos.forEach(parrafo=> {
    parrafo.innerHTML = `Area de Memorira #${cont}`
    //console.log (parrafo);
    cont = cont + 1
})
//Eventos en Js
let boton = document.getElementById ('boton2')
let valor = document.getElementById ('valor')
boton.addEventListener('mouseover',()=>{
    console.log ("Da click :3")
})
boton.addEventListener('click',()=>{
    let nodo = document.createElement("p")
    nodo.innerHTML = "Nuevo Elemento"
    nodo.style.color = "white"
    nodo.style.background = "#111"
    contenido.appendChild (nodo)
})

valor.addEventListener('keypress',(e)=>{
    console.log(e.target.value);
})
