function girarDados(){
    var dado1 = Math.floor(Math.random() * 6) + 1;
    var dado2 = Math.floor(Math.random() * 6) + 1;
    var sum = dado1 + dado2;
   
    document.getElementsByTagName("h4")[0].innerHTML = "Dado 1: ";
    document.getElementsByTagName("p")[0].innerHTML = dado1;
    document.getElementsByTagName("h4")[1].innerHTML = "Dado 2: ";
    document.getElementsByTagName("p")[1].innerHTML = dado2;
    document.getElementById("resultado").innerHTML = "Resultado: " + sum;
}
