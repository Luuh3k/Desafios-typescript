"use strict";
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
var occupationEnum;
(function (occupationEnum) {
    occupationEnum[occupationEnum["atriz"] = 0] = "atriz";
    occupationEnum[occupationEnum["ator"] = 1] = "ator";
    occupationEnum[occupationEnum["padeiro"] = 2] = "padeiro";
    occupationEnum[occupationEnum["padeira"] = 3] = "padeira";
    occupationEnum[occupationEnum["desenvolvedor"] = 4] = "desenvolvedor";
    occupationEnum[occupationEnum["desenvolvedora"] = 5] = "desenvolvedora";
})(occupationEnum || (occupationEnum = {}));
(() => {
    const people1 = {
        name: "maria",
        age: 29,
        occupation: occupationEnum.atriz,
    };
    const people2 = {
        name: "roberto",
        age: 19,
        occupation: occupationEnum.padeiro
    };
    const people3 = {
        name: "laura",
        age: 32,
        occupation: occupationEnum.atriz
    };
    const people4 = {
        name: "carlos",
        age: 19,
        occupation: occupationEnum.padeiro
    };
    console.log(people1.name);
    console.log(people2.name);
    console.log(people3.name);
    console.log(people4.name);
})();
