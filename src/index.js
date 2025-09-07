//Criar uma variável para o nome do herói.
let nome = "Sookie"

//Criar uma variável para o XP (números inteiros).
let xp = int(1000)
let nivel = 

//Se 'XP <= 1000' == Ferro
//Se '1001 <= XP <= 2000' == Bronze
//Se '2001 <= XP <= 5000' == Prata
//Se '5001 <= XP <= 7000' == Ouro
//Se '7001 <= XP <= 8000' == Platina
//Se '8001 <= XP <= 9000' == Ascendente
//Se '9001 <= XP <= 10000' == Imortal
//Se 'XP > 10000' == Radiante

if (xp <= 1000){
    nivel = "Ferro"
}
    else{
        if (1001 <= xp <= 2000){
            nivel = "Bronze"
        }
    }
        else{
            if (2001 <= xp <= 5000){
                nivel = "Prata"
            }
        }
            else{
               if (5001 <= xp <= 7000){
                nivel = "Ouro"
               } 
            } 
                else{
                    if (7001 <= xp <= 8000){
                        nivel = "Platina"
                    }
                }
                    else{
                        if (8001 <= xp <= 9000){
                            nivel = "Ascendente"
                        }
                    }
                        else{
                            if (9001 <= xp <= 10000){
                                nivel = "Imortal"
                            }
                        }
                            else{
                                nivel = "Radiante"
                            }

//Saída: "O Herói de nome **{nome}** está no nível de **{nivel}**."
console.log ("O Herói de nome " + nome + "está no nível de " + nivel + ".")