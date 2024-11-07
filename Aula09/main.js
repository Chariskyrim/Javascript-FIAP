
console.log("oi gentes");

/*let v = [ 10, 20, 30, 40, 50 ]

console.log(v);

//let x = v[0]
//let y = v[1]

let [x,y, ,z] = v

console.log(x,y,z);

function fazAlgo([x,y,,z]) {
    
}

fazAlgo(v)

let v = [ 23, "oi" ]

v["idade"] = 18

console.log(v)*/

/*let v = [
    {
        nome: "Ana",
        idade: 23,
        fome: true
    },
    {
        nome: "Bia",
        idade: 19,
        fome: false
    },
]

/*obj.nome = "Ana"
obj.idade = 23
obj.fome = true*/

let obj = {
    nome: "Fiesta",
    marca: "ford",
    ano: 2024,
    motor: {
        potencia: 1.8,
        tipo: "Aspirador"
    }
}


console.log(obj)

let {nome, marca} = obj

console.log(nome, marca);

function fazAlgo({nome, marca}) {

}

fazAlgo(obj)