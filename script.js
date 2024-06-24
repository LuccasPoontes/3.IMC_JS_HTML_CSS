document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que o formulário seja enviado normalmente

        // Obtém os valores de altura e peso do formulário
        const altura = parseFloat(document.getElementById('altura').value);
        const peso = parseFloat(document.getElementById('peso').value);

        // Verifica se ambos os campos foram preenchidos
        if (isNaN(altura) || isNaN(peso)) {
            alert('Por favor, preencha ambos os campos de altura e peso.');
            return;
        }

        // Calcula o IMC
        const imc = peso / Math.pow(altura, 2);

        // Classifica o resultado
        let classificacao = "";
        if (imc < 16) {
            classificacao = "Magreza grave";
        } else if (imc >= 16 && imc <= 17) {
            classificacao = "Magreza moderada";
        } else if (imc > 17 && imc <= 18.5) {
            classificacao = "Magreza leve";
        } else if (imc > 18.5 && imc <= 24.9) {
            classificacao = "Saudável";
        } else if (imc > 24.9 && imc <= 29.9) {
            classificacao = "Sobrepeso";
        } else if (imc > 29.9 && imc <= 39.9) {
            classificacao = "Obesidade Grau I";
        } else if (imc > 40) {
            classificacao = "Obesidade Grau II (severa)";
        } else {
            classificacao = "Obesidade Grau III (mórbida)";
        }

        // Exibe o resultado em um pop-up
        alert(`Seu IMC é: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);
    });
});

function limparFormulario() {
    document.getElementById('imcForm').reset();
}
