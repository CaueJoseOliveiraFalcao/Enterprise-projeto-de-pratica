function bar(){
    document.getElementById("yes").style.display = 'flex';
    document.getElementById("nao").style.display = 'none';
    document.getElementById("rodape_div").style.display = "none";
    
};
function ex(){
   document.getElementById("yes").style.display = 'none';
   document.getElementById("nao").style.display = 'flex';
   document.getElementById("rodape_div").style.display = 'flex';
};
function abertura(vari){
   document.getElementById(vari).style.display = "flex";
};
function fechamento(vari){
   document.getElementById(vari).style.display = "none";
};


