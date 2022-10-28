window.onload = function(){
    a = document.getElementById('tabla-multiplicar');
    console.log(a*2);
}


function tabla(num){
   i=1
    while(i<51){
        a = i*num; 
        document.write("<p>",num,"*",i,"=",a,"</p>")
        i++;
    }

}