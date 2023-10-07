const navegacion = document.getElementById('menu--navegacion');
const hamburguesa = document.getElementById('hamburguesa');



document.addEventListener('DOMContentLoaded',()=>{
    if(window.innerWidth > 768 ){
        navegacion.classList.add('resposive--dinamico');
    }
});

window.addEventListener('load',()=>{
    const contenedor = document.getElementById('contenedor');
    const contenedorPlanetas = document.getElementById('contenedor--planetas');
    const spinner = document.getElementById('spinner');
    setTimeout(() => {
        spinner.style.display = 'none';
        contenedor.style.display='block'
        contenedorPlanetas.style.display='block';
    },);
});

