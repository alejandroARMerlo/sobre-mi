function obtenerJugadaComputadora(){

    let jugada= ["piedra", "papel", "tijera"]

    
    return jugada[Math.floor(Math.random() * 100) % 3] ; 
}

function determinarGanador(jugadaComputadora, jugadaUsuario){

     if(jugadaComputadora== "piedra" && jugadaUsuario=="tijera"){

        return "pc";
     }else if(jugadaComputadora== "papel" && jugadaUsuario=="piedra"){

        return "pc";
     }
      else if(jugadaComputadora== "tijera" && jugadaUsuario=="papel"){
        
        return "pc";

     } else if(jugadaComputadora==jugadaUsuario){

        return "Empate";
     }else{

        return "user";
     }

}

