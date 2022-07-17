[boton1,boton2,boton3]=[document.createElement("button"),document.createElement("button"),document.createElement("button")];

document.body.appendChild(boton1);
document.body.appendChild(boton2);
document.body.appendChild(boton3);

boton1.innerHTML="boton1";
boton2.innerHTML="boton2";
boton3.innerHTML="boton3";

boton1.addEventListener('click',()=>{
    const encabezado=document.createElement("h1");
    document.body.appendChild(encabezado);
    encabezado.setAttribute('id','encabezado1');
    encabezado.innerHTML="hola a todos!";
});

boton2.addEventListener('click',()=>{
    const parrafo=document.createElement("p");
    document.body.appendChild(parrafo);
    parrafo.setAttribute('id','parrafo1');
    parrafo.innerHTML="hola este es un párrafo";
});

boton3.addEventListener('click',()=>{
    window.alert("esta es una alerta!");
});
