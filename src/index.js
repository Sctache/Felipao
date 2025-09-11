//Criar uma variável para o nome do herói.
let nome = "Felipão"

//Criar uma variável para o XP (números inteiros).
let xp = 1000
let nivel = ""


//Se 'XP <= 1000' == Ferro
//Se '1001 <= XP <= 2000' == Bronze
//Se '2001 <= XP <= 5000' == Prata
//Se '5001 <= XP <= 7000' == Ouro
//Se '7001 <= XP <= 8000' == Platina
//Se '8001 <= XP <= 9000' == Ascendente
//Se '9001 <= XP <= 10000' == Imortal
//Se 'XP > 10000' == Radiante

switch (true){
    case 0<=xp<=1000: 
    nivel = "Ferro"
    break

    case 1001<=xp<=2000:
    nivel = "Bronze"
    break

    case 2001<=xp<=5000:
    nivel = "Prata" 
    break

    case 5001<=xp<=7000: 
    nivel = "Ouro"
    break

    case 7001<=xp<=8000: 
    nivel = "Platina"
    break

    case 8001<=xp<=9000: 
    nivel = "Ascendente"
    break

    case 9001<=xp<=10000: 
    nivel = "Imortal"
    break

    case xp>10000: 
    nivel = "Radiante"
    break
}

//Saída: "O Herói de nome **{nome}** está no nível de **{nivel}**."
console.log ("O Herói de nome " + nome + " está no nível de " + nivel + ".")