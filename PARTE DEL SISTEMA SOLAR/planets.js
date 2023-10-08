function volver(){
    const divUnBlock = document.getElementById('contenido_block');
    const divBlock = document.getElementById('contenido_home');
    divBlock.style.display = 'block';
    divUnBlock.style.display = 'none';
}
if(annyang){
    // Add our commands to annyang
    console.log("Estoy aquí");

    // Add the command to annyang using the function reference
    
var comands = {
    'mercurio': function () {
        ocultarPaginaPorId('mercure');
    },
    'venus': function () {
        ocultarPaginaPorId('venus');
    },
    'tierra': function () {
        ocultarPaginaPorId('terre');
    },
    'marte': function () {
        ocultarPaginaPorId('mars');
    },
    'júpiter': function () {
        ocultarPaginaPorId('jupiter');
    },
    'saturno': function () {
        ocultarPaginaPorId('saturne');
    },
    'urano': function () {
        ocultarPaginaPorId('uranus');
    },
    'neptuno': function () {
        ocultarPaginaPorId('neptune');
    },
    'volver': function () {
        volver();
    }

}
annyang.setLanguage("es-ES");
annyang.addCommands(comands);
    annyang.debug();
        annyang.start({
            autoRestart: true,
            continuous: false
        });
    
}


