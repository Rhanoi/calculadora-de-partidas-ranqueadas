import promptSync from 'prompt-sync';
const prompt = promptSync();

let vitorias = parseInt(prompt("Quantidade de vitórias: "))
let derrotas = parseInt(prompt("Quantidade de derrotas: "))

function calculadoraPartidasRankeadas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let classificacao;

    switch (true) {
        case saldoVitorias < 0:
            saldoVitorias = 0
            classificacao = "Ferro"
            break;
        case saldoVitorias < 10:
            classificacao = "Ferro";
            break;
        case saldoVitorias <= 20:
            classificacao = "Bronze";
            break;
        case saldoVitorias <= 50:
            classificacao = "Prata";
            break;
        case saldoVitorias <= 80:
            classificacao = "Ouro";
            break;
        case saldoVitorias <= 90:
            classificacao = "Diamante";
            break;
        case saldoVitorias <= 100:
            classificacao = "Lendário";
            break;
        default:
            classificacao = "Imortal";
    }

    console.log(`O Herói tem de saldo de ${saldoVitorias} está na classificação: ${classificacao}`);
}
calculadoraPartidasRankeadas(vitorias, derrotas)