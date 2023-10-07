function ocultarPaginaPorId(idElemento) {

    const divUnBlock = document.getElementById('contenido_block');
    const divBlock = document.getElementById('contenido_home');
    console.log(divUnBlock);
    console.log(divBlock);
    divBlock.style.display = 'none';




    const apiUrl = 'https://api.le-systeme-solaire.net/rest/bodies/' + idElemento;


    fetch(apiUrl)
        .then(response => {

            if (!response.ok) {
                throw new Error('No se pudo obtener la información de la API');
            }

            return response.json();
        })
        .then(data => {
            divUnBlock.style.display = 'block';
            if (idElemento == "mercure") {
                divUnBlock.style.backgroundImage = 'url("./planetas/mercurio.png")';
                divUnBlock.innerHTML = `
                <img class="arrow" src="img/flecha.png" alt="Flecha atrás"  onclick="volver()">
            <h2 class="EngName">${data.englishName}</h2>
            <p class="Diam">Diámetro: ${data.meanRadius} km</p>
            <p class="gravity">Gravedad:  ${data.gravity} N</p>
            <p class="Temp">Temperatura Media: ${(data.avgTemp) - 273.15} ºC &#128520</p>
            <p class="Density">Densidad: (${(data.density)})</p>
                
            `;
            } else if (idElemento == "venus") {
                divUnBlock.style.backgroundImage = 'url("./planetas/venus.png")';
                divUnBlock.innerHTML = `
                <img class="arrow" src="img/flecha.png" alt="Flecha atrás"  onclick="volver()">
            <h2 class="EngName">${data.englishName}</h2>
            <p class="Diam">Diámetro: ${data.meanRadius} km</p>
            <p class="gravity">Gravedad:  ${data.gravity} N</p>
            <p class="Temp">Temperatura Media: ${(data.avgTemp) - 273.15} ºC &#128520 &#128520</p>
            <p class="Density">Densidad: (${(data.density)})</p>
               
            `;
            } else if (idElemento == "terre") {
                divUnBlock.style.backgroundImage = 'url("./planetas/tierra.png")';
                divUnBlock.innerHTML = `
                <img class="arrow" src="img/flecha.png" alt="Flecha atrás"  onclick="volver()">
            <h2 class="EngName">${data.englishName}</h2>
            <p class="Diam">Diámetro: ${data.meanRadius} km</p>
            <p class="gravity">Gravedad:  ${data.gravity} N</p>
            <p class="Temp">Temperatura Media: ${(data.avgTemp) - 273.15} ºC &#127757</p>
            <p class="Density">Densidad: (${(data.density)})</p>
              
            `;
            } else if (idElemento == "mars") {
                divUnBlock.style.backgroundImage = 'url("./planetas/marte.png")';
                divUnBlock.innerHTML = `
                <img class="arrow" src="img/flecha.png" alt="Flecha atrás"  onclick="volver()">
            <h2 class="EngName">${data.englishName}</h2>
            <p class="Diam">Diámetro: ${data.meanRadius} km</p>
            <p class="gravity">Gravedad:  ${data.gravity} N</p>
            <p class="Temp">Temperatura Media: ${(data.avgTemp) - 273.15} ºC &#10052</p>
            <p class="Density">Densidad: (${(data.density)})</p>
            `;
            } else if (idElemento == "jupiter") {
                divUnBlock.style.backgroundImage = 'url("./planetas/jupiter.png")';
                divUnBlock.innerHTML = `
                <img class="arrow" src="img/flecha.png" alt="Flecha atrás"  onclick="volver()">
            <h2 class="EngName">${data.englishName}</h2>
            <p class="Diam">Diámetro: ${data.meanRadius} km</p>
            <p class="gravity">Gravedad:  ${data.gravity} N</p>
            <p class="Temp">Temperatura Media: ${(data.avgTemp) - 273.15} ºC &#10052 &#10052</p>
            <p class="Density">Densidad: (${(data.density)})</p>
            `;
            } else if (idElemento == "saturne") {
                divUnBlock.style.backgroundImage = 'url("./planetas/saturno.png")';
                divUnBlock.innerHTML = `
                <img class="arrow" src="img/flecha.png" alt="Flecha atrás"  onclick="volver()">
                <h2 class="EngName">${data.englishName}</h2>
                <p class="Diam">Diámetro: ${data.meanRadius} km</p>
                <p class="gravity">Gravedad:  ${data.gravity} N</p>
                <p class="Temp">Temperatura Media: ${(data.avgTemp) - 273.15} ºC &#10052 &#10052</p>
                <p class="Density">Densidad: (${(data.density)})</p>
            `;
            } else if (idElemento == "uranus") {
                divUnBlock.style.backgroundImage = 'url("./planetas/urano.png")';
                divUnBlock.innerHTML = `
                <img class="arrow" src="img/flecha.png" alt="Flecha atrás"  onclick="volver()">
            <h2 class="EngName">${data.englishName}</h2>
            <p class="Diam">Diámetro: ${data.meanRadius} km</p>
            <p class="gravity">Gravedad:  ${data.gravity} N</p>
            <p class="Temp">Temperatura Media: ${(data.avgTemp) - 273.15} ºC &#10052 &#10052 &#10052;</p>
            <p class="Density">Densidad: (${(data.density)})</p>
            `;
            } else if (idElemento == "neptune") {
                divUnBlock.style.backgroundImage = 'url("./planetas/neptuno.png")';
                divUnBlock.innerHTML = `
                <img class="arrow" src="img/flecha.png" alt="Flecha atrás"  onclick="volver()">
            <h2 class="EngName">${data.englishName}</h2>
            <p class="Diam">Diámetro: ${data.meanRadius} km</p>
            <p class="gravity">Gravedad:  ${data.gravity} N</p>
            <p class="Temp">Temperatura Media: ${(data.avgTemp) - 273.15} ºC &#10052 &#10052 &#10052</p>
            <p class="Density">Densidad: (${(data.density)})</p>
            `;
            }

            console.log(data);

        })
        .catch(error => {

            console.error(error);
        });
}
function volver() {
    const divUnBlock = document.getElementById('contenido_block');
    const divBlock = document.getElementById('contenido_home');
    divBlock.style.display = 'block';
    divUnBlock.style.display = 'none'
}


document.getElementById('miElemento').addEventListener('click', function () {
    ocultarPaginaPorId('miElemento');
});
