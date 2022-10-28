let entradas = []

suma = 0;
function sumar(){
    entrada =  document.getElementById('entrada').value;
   
    if(entrada!=9999){
       suma+=Number(entrada);
        document.getElementById('texto').innerHTML = "<p>"+suma+"</p>";
        document.getElementById('entrada').value = " ";
    }

}
    
    

