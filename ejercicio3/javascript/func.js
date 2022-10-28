var almacenar = []
function validate() {
    let x = document.getElementById('numcuenta').value;
    if(x>=0){
        almacenar.push(x);
        console.log(almacenar);
    }else{
        alert('tarea finalilzada numero negativo',x);
    }
    
    
}