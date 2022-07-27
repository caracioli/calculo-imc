function calcularImc() {
    // Declaração de variaveis
    // com o LET cria variavel global mesma forma de escrever do VAR
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let result = document.getElementById('result');
    let imc = document.getElementById('imc');

    // Substitui virgula por ponto utilizando o replace
    altura = altura.replace(',','.');
    peso = peso.replace(',','.');
    
    // Calcular IMC
    let calculo = peso / (altura * altura);

    // arrendondando o valor para tres casa decimais
    calculo = calculo.toFixed(3);

    // Mostra na tela o IMC do usuario, esse resultado concatena com <br />
    result.innerHTML = calculo.replace(',', '.') + '<br />';
    
    // verificar se digitou letra ou numero
    if (letra != 0 && letra != 1 && letra != 2 && letra != 3 && letra != 4 && letra != 5 && letra != 6 && letra != 7 && letra != 8 && letra != 9 && letra != ',' && letra != '.' && letra != 'Tab' && letra != 'Enter' && letra != 'Backspace' && letra != 'Delete' && letra != 'ArrowLeft' && letra != 'ArrowRight') {
      alert('Caractere invalido!');}
    // Resulta demonstra se o usuario está dentro do peso ideal ouo não
     if (calculo < 18.5)
        imc.innerHTML = 'Você esta abaixo do peso (Magreza). Grau 0'; 
     else if (calculo >= 18.5 && calculo <= 24.9)
        imc.innerHTML = 'Você esta no peso ideal (Normal). Grau 0'; 
     else if (calculo >= 25 && calculo <= 29.9)
        imc.innerHTML = 'Você esta acima do peso (Sobrepeso). Grau I'; 
     else if (calculo >= 30 && calculo <= 40)
        imc.innerHTML = 'Você esta bem acima do peso (Obesidade).Grau II'; 
     else
        imc.innerHTML = 'Você esta super acima do peso (Obesidade grave). Grau III'; 
}