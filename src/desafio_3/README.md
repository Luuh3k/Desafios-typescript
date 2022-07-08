# Descrição do Desafio
> O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

## Código Javascript
```javascript
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

campoSaldo.innerHTML = 0

function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
```

## Código HTML
```html
<h4>Valor a ser adicionado: <input id="soma"> </h4>
<button id="atualizar-saldo">Atualizar saldo</button>
<button id="limpar-saldo">Limpar seu saldo</button>
<h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
```