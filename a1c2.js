//---Introduccion
console.log("Bienvenidos");

//--Usos basicos
const contador = 1;
console.log(contador);

if(true){
  const contador = 5;
  console.log(contador);
}

const persona = {
  nombre: "Eduardo",
  apellido: "Parada" 
}
persona.nombre = "José"

console.log(persona.nombre);

//--Objetos literales y Optional Chaining Operator
//const frutas =["pera", "manzana", "sandia"];
//console.log(frutas[2]);

//--Objetos literales, no indexados
//const animal = {
//  color: "naranja",
//  nombre: "Simba",
//  rugiendo: true
//}

//console.log("El color del animal es de " + animal.color);
//console.log("El nombre del animal es " + animal.nombre);

//console.log(animal["rugiendo"]);

//--Primer Uso
const tareas ={
  "2658-5467s-dfgdfg" :{
    title: "tarea #01"
  }
}

console.log(tareas["2658-5467s-dfgdfg"].title)

//--Segundo Uso
//const animal = {
  //color: "naranja",
  //nombre: "Simba",
  //rugiendo: true,
  //favorito:{
    //dia:{
      //ok: true,
    //},
    //noche: {
      //ok: false
    //}
  //}
//}

//console.log(animal.favorito.dia.ok);
//console.log(animal.favorito?.luna?.ok);
            
//--Destructuring
//const animal = {
  //color: "naranja",
  //nombre: "Simba",
  //rugiendo: true,
  //favorito:{
    //dia:{
      //ok: true,
    //},
    //noche: {
      //ok: false
    //}
  //}
//}

//--Guardar el valor de la propiedad en una constante
//const color = animal.color;
//const nombre = animal.nombre;

//console.log("color: " + color + ", animal: " + nombre);

//--Destructuring #2
const animal = {
  color: "Azul",
  nombre: "Torogpz",
  rugiendo: true
}

//Destructuring objetos literales...
const {color, nombre, volando} = animal;
console.log("El " + nombre + " es de color: " + color);

//arrays indexados
const frutas = ["pera", "manzana", "sandia"];

//destructuring array
const [pera, manzana, sandia] = frutas;
console.log("El " + nombre + " come" + pera);