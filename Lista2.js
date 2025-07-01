// Alternador de tema
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("darkTheme", isDark);
});

// Carregar tema salvo
if (localStorage.getItem("darkTheme") === "true") {
    document.body.classList.add("dark-theme");
}

// Mostrar status quando executar exercício
function mostrarStatus(exercicio) {
    const status = document.getElementById("status");
    status.style.display = "block";
    status.innerHTML = `✅ <strong>Exercício ${exercicio} executado com sucesso!</strong>`;
    
    // Esconder após 3 segundos
    setTimeout(() => {
        status.style.display = "none";
    }, 3000);
}

// Função principal para executar os exercícios
function executarExercicio(n) {
    try {
        switch(n) {
            case 1:
                // Exercício 1: Par ou Ímpar
                let numeroDigitado = parseInt(prompt("🔢 Digite um número:"));
                
                if (isNaN(numeroDigitado)) {
                    alert("❌ Por favor, digite um número válido!");
                    return;
                }
                
                let resultado;
                if (numeroDigitado === 0) {
                    resultado = '0 (zero)';
                } else if (numeroDigitado % 2 !== 0) {
                    resultado = 'Ímpar';
                } else {
                    resultado = 'Par';
                }
                
                alert(`✅ O número ${numeroDigitado} é ${resultado}`);
                mostrarStatus(1);
                break;

            case 2:
                // Exercício 2: Comparar dois números
                let num1 = Number(prompt("🔢 Digite o primeiro número:"));
                let num2 = Number(prompt("🔢 Digite o segundo número:"));
                
                if (isNaN(num1) || isNaN(num2)) {
                    alert("❌ Por favor, digite números válidos!");
                    return;
                }
                
                if (num1 > num2) {
                    alert(`✅ O primeiro número (${num1}) é maior que o segundo (${num2})`);
                } else if (num1 < num2) {
                    alert(`✅ O segundo número (${num2}) é maior que o primeiro (${num1})`);
                } else {
                    alert(`✅ Os dois números são iguais (${num1})`);
                }
                mostrarStatus(2);
                break;

            case 3:
                // Exercício 3: Fila preferencial
                let idade = Number(prompt("👤 Qual sua idade?"));
                let gestante = prompt("👶 Você é gestante? (s/n):");
                let deficiencia = prompt("♿ Você possui deficiência? (s/n):");
                
                if (isNaN(idade) || idade < 0) {
                    alert("❌ Por favor, digite uma idade válida!");
                    return;
                }
                
                if (idade >= 65 || gestante?.toLowerCase() === "s" || deficiencia?.toLowerCase() === "s") {
                    alert("✅ Vá para a fila preferencial 🏃‍♂️");
                } else {
                    alert("✅ Vá para a fila comum 🚶‍♂️");
                }
                mostrarStatus(3);
                break;

            case 4:
                // Exercício 4: Controle de acesso por idade
                let idadeAcesso = Number(prompt("🎫 Qual a sua idade?"));
                
                if (isNaN(idadeAcesso) || idadeAcesso < 0) {
                    alert("❌ Por favor, digite uma idade válida!");
                    return;
                }
                
                if (idadeAcesso < 16) {
                    alert("🚫 Barrado! Entrada não permitida para menores de 16 anos.");
                } else if (idadeAcesso >= 16 && idadeAcesso < 18) {
                    alert("⚠️ Só entra com responsável!");
                } else {
                    alert("🎉 Seja Bem-Vindo! Entrada liberada!");
                }
                mostrarStatus(4);
                break;

            case 5:
                // Exercício 5: Sistema de login
                const loginCorreto = "ramos@gmail.com";
                const senhaCorreta = "****";
                
                let loginDigitado = prompt("📧 Login:");
                let senhaDigitada = prompt("🔒 Senha:");
                
                if (!loginDigitado || !senhaDigitada) {
                    alert("❌ Por favor, preencha login e senha!");
                    return;
                }
                
                if (loginDigitado === loginCorreto && senhaDigitada === senhaCorreta) {
                    alert("🎉 Seja Bem-Vindo(a)! Login realizado com sucesso!");
                } else if (loginDigitado !== loginCorreto) {
                    alert("❌ Login incorreto!");
                } else {
                    alert("❌ Senha incorreta!");
                }
                mostrarStatus(5);
                break;

            case 6:
                // Exercício 6: Quiz de conhecimentos
                const respostas = {
                    1: "Pedro",
                    2: "Vasco",
                    3: "Mercúrio"
                };
                
                let contador = 0;
                let acertos = [];
                
                // Pergunta 1
                let pergunta1 = prompt("🇧🇷 Quem descobriu o Brasil?");
                if (pergunta1 === respostas[1]) {
                    alert("✅ Certa Resposta!");
                    contador++;
                    acertos.push("Pergunta 1");
                }
                
                // Pergunta 2
                let pergunta2 = prompt("⚽ Qual o maior time da Galáxia?");
                if (pergunta2 === respostas[2]) {
                    alert("✅ Certa Resposta!");
                    contador++;
                    acertos.push("Pergunta 2");
                }
                
                // Pergunta 3
                let pergunta3 = prompt("🪐 Qual o planeta mais próximo do sol?");
                if (pergunta3 === respostas[3]) {
                    alert("✅ Certa Resposta!");
                    contador++;
                    acertos.push("Pergunta 3");
                }
                
                // Resultado final
                let mensagemFinal = `🎯 Fim de Jogo!\n\n📊 Você acertou ${contador} de 3 perguntas.\n`;
                
                if (contador === 3) {
                    mensagemFinal += "🏆 Parabéns! Pontuação perfeita!";
                } else if (contador === 2) {
                    mensagemFinal += "👏 Muito bem! Quase lá!";
                } else if (contador === 1) {
                    mensagemFinal += "😊 Bom trabalho! Continue estudando!";
                } else {
                    mensagemFinal += "😞 Você Perdeu!! Tente novamente!";
                }
                
                if (acertos.length > 0) {
                    mensagemFinal += `\n\n✅ Acertou: ${acertos.join(", ")}`;
                }
                
                alert(mensagemFinal);
                mostrarStatus(6);
                break;

            default:
                alert("❌ Exercício inválido!");
        }
    } catch (error) {
        alert("❌ Erro inesperado! Tente novamente.");
        console.error("Erro:", error);
    }
}

// Mensagem de boas-vindas
console.log("🚀 Lista de Exercícios carregada com sucesso!");
console.log("💡 Clique nos botões para executar os exercícios!");v