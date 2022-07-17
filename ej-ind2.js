

var form_update=document.createElement('div');
form_update.setAttribute('class','formulario_actualizacion');
var campos=["nombre","apellido","email","telefono"];
var etiquetas=["Nombre","Apellido","E-mail","Teléfono"];

for(var i=0; i<campos.length;i++){
    eval("label_"+campos[i]+"=document.createElement('label'); campo_"+campos[i]+"=document.createElement('input'); label_"+campos[i]+".innerHTML='"+etiquetas[i]+"';  campo_"+campos[i]+".innerHTML='"+campos[i]+"'; campo_"+campos[i]+".setAttribute('class','u_"+campos[i]+"'); campo_"+campos[i]+".style.width='100px'; form_update.appendChild(label_"+campos[i]+"); form_update.appendChild(campo_"+campos[i]+");");
}

form_update.style.display="flex";
form_update.style.flexDirection="row";

var btnUpdate=document.createElement("button");
btnUpdate.innerHTML="Actualizar..";
form_update.appendChild(btnUpdate);


document.body.appendChild(form_update);



//para que no se vea (util)
//form_update.style.display="none";


/**
 * 
 * "campo_"+campos[i]+"=document.createElement('input'); campo_"+campos[i]+".innerHTML='"+campos[i]+"'; campo_"+campos[i]+".setAttribute=('class','u_"+campos[i]+"'); form_update.appendChild(campo_"+campos[i]+");"
 */




