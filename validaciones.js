var nombre=document.getElementById("nombre");
var apellido=document.getElementById("apellido");
var email=document.getElementById("email");
var telefono=document.getElementById("telefono");
var deporte=document.getElementById("deporte");
var curso=document.getElementById("curso");
var codigo=document.getElementById("codigo");
var formulario=document.getElementById("formulario");

formulario.addEventListener("submit",e=>{
    e.preventDefault();
    if(nombre.value.length < 1)
    {
        alert("Ingrese un nombre")
    }
    else if(apellido.value.length < 1){
        alert("Ingrese un apellido")    
    }
    else if(email.value.length < 1){
        alert("Ingrese un email")    
    }
    else if(telefono.value.length < 1){
        alert("Ingrese un telefono")    
    }
    else if(deporte.value.length < 1){
        alert("Ingrese un deporte")    
    }
    else if(curso.value.length < 1){
        alert("Ingrese un curso")    
    }
    else if(codigo.value.length < 1){
        alert("Ingrese un codigo")    
    }
    else
        alert("Enviado")
});
