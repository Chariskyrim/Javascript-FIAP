console.log("oi gente");

localStorage.setItem("username", "Francisco Abacaxi")
let nome = localStorage.getItem("usernam")
console.log("nome", nome);

localStorage.setItem("userage", "500")
let age = localStorage.getItem("userage")
console.log("age", age+1);

let user = {
    "name": "Francisco Abacaxi",
    "age": 500,
    "email":"francisco@abacaxi.com",
    "login":"francis"
}

console.log("user", user);

//let userTxt = `{
//    "name": "Francisco Abacaxi",
//    "age": 500,
//   "email":"francisco@abacaxi.com",
//    "login":"francis"
//}`

//let user = JSON.parse(userTxt); (.parse tranforma em objeto)
let userTxt = JSON.stringify(user); //(.stringify transforma em string)
console.log("userTxt", userTxt);

console.log(user.name);
console.log(userTxt.name);