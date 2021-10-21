const servicios = [disenio, maquetado, desarrollo, hosting, logo, canva, mantenimiento];

// Se crea un div por cada elemento del array servicios
for(let servicio of servicios){
    $("#servicios").append(`<div class="presupuestador__servicio" id="presupuestador__servicio--${servicio.codigo}">
                                <div class="presupuestador__servicio--titulo">${servicio.nombre}</div>
                                <button class="btn-secondary btn" id="agregar-${servicio.codigo}">Agregar</button>
                            </div>`);
}

// Randeriza cada servicio con un slideDown escalonadamente
$('.presupuestador__servicio').hide();
let fade = 100;
servicios.forEach(servicio => {
    setTimeout(() => {
        $(`#presupuestador__servicio--${servicio.codigo}`).slideDown();
    }, fade)
    
    fade += 100;
});

// Setea todos los elementos del presupuesto y solo los muestra si su cantidad es mayor que cero
servicios.forEach((servicio, index) => {
    $(`#presupuesto__items--cantidad-${index}`).html(`${servicio.cantidad}`);
    $(`#presupuesto__items--titulo-${index}`).html(`${servicio.nombre}`);
    $(`#presupuesto__items--precio-${index}`).html(`$${servicio.precio}`);
})