
let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

if(campoSaldo && botaoAtualizar){
    botaoAtualizar.addEventListener('click', () => {
        let valorASomar = Number(soma.value);
        somarAoSaldo(valorASomar)
    })
    botaoLimpar.addEventListener('click', () => {
        limparSaldo();
    })
    function somarAoSaldo(valor : number): void{
        let valorCampoSaldo: number = 0;
        if(campoSaldo.innerText !== ""){
            valorCampoSaldo = Number(campoSaldo.innerHTML);
        }
        const totalSomado = valorCampoSaldo + valor;
        campoSaldo.innerText = totalSomado.toString();
    }
    
    function limparSaldo(): void{
        campoSaldo.innerHTML = '0';
    }
    
}

