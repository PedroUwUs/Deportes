let botonarea= document.getElementById("confi");
botonarea.addEventListener("click",areacua);

function areacua(){
    let l1;
    l1 =Text(document.getElementById("nombre").value);
    
    if(l1==true){
    let mostrar = document.getElementById("mostrar");
    mostrar.innerText=("Hola");
    }else{
        let mostrar = document.getElementById("mostrar");
        mostrar.innerText=("no hola");
    }
    
}
