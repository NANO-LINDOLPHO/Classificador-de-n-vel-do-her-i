javascript
let nomeHeroi = "charlesdarwin"

let xp = 9890

let resultado = ""



  if (xp <= 1000){

    resultado = "Ferro"

  }  

  else if (xp >= 1001 && xp <= 2000){

      resultado ="Bronze"

  }    

  else if (xp >= 2001 && xp <= 5000){

      resultado = "Prata"

  }

  else if (xp >= 5001 && xp <= 7000){ 

      resultado = "Ouro"

  }

  else if (xp >= 7001 && xp<= 8000){

      resultado ="Platina" 

  }

   else if(xp >= 8001 && xp <= 9000){

      resultado ="Ascendente"

   }    

  else if (xp >= 9001 && xp<= 10000){

      resultado ="Imortal"

  }      

  else if(xp >= 10000){

      resultado="Radiante"

  }else{

    resultado = "Número invalido"

}  



console.log("O heroi de nome " + nomeHeroi + " está no nivel " + resultado )
