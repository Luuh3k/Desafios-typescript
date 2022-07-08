// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// let employee = {};
// employee.code = 10;
// employee.name = "John";

interface employee {
    code: number,
    name: string
}

(() => {
    const employeeJohn : employee = {
        code: 10,
        name: "John"
    }
    console.log(employeeJohn.name)
})();
