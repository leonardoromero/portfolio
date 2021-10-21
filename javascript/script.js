// Setea al total del presupuesto en 0
let total = 0;

// Event listener para mostrar en el presupuesto cada servicio seleccionado, y a su vez los almacena en el localStorage. 
// Si ya existe en el localStorage solo le suma a propiedad cantidad
$('.btn-secondary').on('click', (e) => {
    // Extrae el código de producto del id que encuentra en el target del evento
    let index = (e.target.id).slice(-1)-1;

    let seleccionado = servicios[index];
    total += seleccionado.precio;

    // Muestra en el presupuesto los elementos seleccionados
    $(`#presupuesto__items__item-${index}`).css('display', 'flex');
    $(`#presupuesto__items__item-${index}`).fadeOut(100);
    $(`#presupuesto__items__item-${index}`).fadeIn(150);

    // Si el elemento no se encuentra en el localStorage lo crea, visibilizando sus propiedades, y si ya existe lo actualiza
    if(!localStorage.getItem(`item${index}`)){
        seleccionado.sumar();
        $(`#presupuesto__items--precio-${index}`).html(`$${seleccionado.cantidad * `${seleccionado.precio}`}`);
        $(`#presupuesto__items--cantidad-${index}`).html(`${seleccionado.cantidad}`);
        localStorage.setItem(`item${index}`, JSON.stringify(seleccionado));
    } else {
        let dataStorage = JSON.parse(localStorage.getItem(`item${index}`));
        dataStorage.cantidad = dataStorage.cantidad + 1;
        localStorage.setItem(`item${index}`, JSON.stringify(dataStorage));
        $(`#presupuesto__items--cantidad-${index}`).html(`${JSON.parse(localStorage.getItem(`item${index}`)).cantidad}`);
        $(`#presupuesto__items--precio-${index}`).html(`$${JSON.parse(localStorage.getItem(`item${index}`)).cantidad * JSON.parse(localStorage.getItem(`item${index}`)).precio}`);
    }

    $('#total').html(`Total $${total}`);
    $('#presupuesto').slideDown(500);

})

// Comprueba si localStorage contiene elementos y, de ser así, los mantiene en el presupuesto
if(localStorage.length != 0){
    $('#presupuesto').show();
    for(let i = 0; i < localStorage.length; i++){
        let clave = localStorage.key(i);
        
        total += JSON.parse(localStorage.getItem(clave)).precio * JSON.parse(localStorage.getItem(clave)).cantidad;
        $('#total').html(`Total $${total}`);

        $(`#presupuesto__items__item-${i}`).css('display', 'flex');
        $(`#presupuesto__items--cantidad-${i}`).html(`${JSON.parse(localStorage.getItem(clave)).cantidad}`);
        $(`#presupuesto__items--precio-${i}`).html(`$${JSON.parse(localStorage.getItem(clave)).cantidad * JSON.parse(localStorage.getItem(clave)).precio}`);
    
    }
} else {
    $('#presupuesto').hide();
}

// El botón borra el localStorage, recarga la página y setea la cantidad de los productos en 0
$('#clear-btn').on('click', () => {
    localStorage.clear();
    location.reload();
    servicios.forEach(servicio => servicio.cantidad = 0)
});

// Renderizado del mapa con API de Google Maps
function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.5971803, lng: -58.3945095 },
    zoom: 11
  });
}
