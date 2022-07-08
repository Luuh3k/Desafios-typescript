"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
if (campoSaldo && botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        let valorASomar = Number(soma.value);
        somarAoSaldo(valorASomar);
    });
    botaoLimpar.addEventListener('click', () => {
        limparSaldo();
    });
    function somarAoSaldo(valor) {
        let valorCampoSaldo = 0;
        if (campoSaldo.innerText !== "") {
            valorCampoSaldo = Number(campoSaldo.innerHTML);
        }
        const totalSomado = valorCampoSaldo + valor;
        campoSaldo.innerText = totalSomado.toString();
    }
    function limparSaldo() {
        campoSaldo.innerHTML = '0';
    }
}
