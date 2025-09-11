//Criar uma variável para o nome do herói.
let nome = "Sookie"

//Criar uma variável para o XP (números inteiros).
let xp = 1000


//Se 'XP <= 1000' == Ferro
//Se '1001 <= XP <= 2000' == Bronze
//Se '2001 <= XP <= 5000' == Prata
//Se '5001 <= XP <= 7000' == Ouro
//Se '7001 <= XP <= 8000' == Platina
//Se '8001 <= XP <= 9000' == Ascendente
//Se '9001 <= XP <= 10000' == Imortal
//Se 'XP > 10000' == Radiante

switch (xp){
    case 0<=xp<=1000: console.log("Ferro")
    break

    case 1001<=xp<=2000: console.log("Bronze")
    break

    case 2001<=xp<=5000: console.log("Prata")
    break

    case 5001<=xp<=7000: console.log("Ouro")
    break

    case 7001<=xp<=8000: console.log("Platina")
    break

    case 8001<=xp<=9000: console.log("Ascendente")
    break

    case 9001<=xp<=10000: console.log("Imortal")
    break

    case xp>10000: console.log("Radiante")
    break

    default:
    console.log("O número digitado é inválido.")
}

//Saída: "O Herói de nome **{nome}** está no nível de **{nivel}**."
console.log ("O Herói de nome " + nome + "está no nível de " + xp + ".")