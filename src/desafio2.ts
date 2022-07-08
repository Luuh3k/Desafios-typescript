// Como podemos melhorar o esse código usando TS? 
// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

enum occupationEnum {
    atriz,
    ator,
    padeiro,
    padeira,
    desenvolvedor,
    desenvolvedora
}

interface Person {
    name: string,
    age: number,
    occupation: occupationEnum
}

(() => {

    const people1: Person = {
        name: "maria",
        age: 29,
        occupation: occupationEnum.atriz,
    }

    const people2: Person = {
        name: "roberto",
        age: 19,
        occupation: occupationEnum.padeiro
    }

    const people3: Person = {
        name: "laura",
        age: 32,
        occupation : occupationEnum.atriz
    }

    const people4: Person = {
        name: "carlos",
        age: 19,
        occupation: occupationEnum.padeiro
    }

    console.log(people1.name)
    console.log(people2.name)
    console.log(people3.name)
    console.log(people4.name)
    
})()