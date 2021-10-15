class Servicio {
    constructor(codigo, tipo, nombre, dias, precio, cantidad) {
        this.codigo = codigo;
        this.tipo = tipo;
        this.nombre = nombre;
        this.dias = dias;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    sumar = () => {
        this.cantidad++;
    }
}

const disenio = new Servicio(1, 'Diseño', 'Diseño web integral sin maquetado', 7, 10000, 0);
const maquetado = new Servicio(2, 'Desarrollo', 'Maquetado (sin diseño)', 21, 10000, 0);
const desarrollo = new Servicio(3, 'Desarrollo', '⚡ Diseño y maquetado', 30, 18000, 0);
const hosting = new Servicio(4, 'Desarrollo', 'Trámites de creación del dominio + cloud hosting', 4, 4000, 0);
const logo = new Servicio(5, 'Diseño', 'Diseño de logo', 3, 4000, 0);
const canva = new Servicio(6, 'Diseño', 'Diseño de banners y flyers multiplataforma', 7, 8000, 0);
const mantenimiento = new Servicio(7, 'Mantenimiento', 'Mantenimiento mensual', 0, 1500, 0);

const servicios = [disenio, maquetado, desarrollo, hosting, logo, canva, mantenimiento];

// Se crea un div por cada elemento del array servicios
for(let servicio of servicios){
    $("#servicios").append(`<div class="presupuestador__servicio" id="presupuestador__servicio--${servicio.codigo}">
                                <div class="presupuestador__servicio--titulo">${servicio.nombre}</div>
                                <button class="btn-secondary btn" id="agregar-${servicio.codigo}">Agregar</button>
                            </div>`);
}

// Setea al total del presupuesto en 0
let total = 0;

// Setea todos los elementos del presupuesto y solo los muestra si su cantidad es mayor que cero
for(let i= 0; i< servicios.length; i++){
    $(`#presupuesto__items--cantidad-${i}`).html(`${servicios[i].cantidad}`);
    $(`#presupuesto__items--titulo-${i}`).html(`${servicios[i].nombre}`);
    $(`#presupuesto__items--precio-${i}`).html(`$${servicios[i].precio}`);
}

// Event listener para mostrar en el presupuesto cada servicio seleccionado, y a su vez los almacena en el localStorage. 
// Si ya existe en el localStorage solo le suma a propiedad cantidad

$('.btn-secondary').on('click', (e) => {
    // Extrae el código de producto del id que encuentra en el target del evento
    let index = (e.target.id).slice(-1)-1;

    total += servicios[index].precio;

    // Muestra en el presupuesto los elementos seleccionados
    $(`#presupuesto__items__item-${index}`).css('display', 'flex');
    $(`#presupuesto__items__item-${index}`).fadeOut(100);
    $(`#presupuesto__items__item-${index}`).fadeIn(300);

    // Si el elemento no se encuentra en el localStorage lo crea, visibilizando sus propiedades, y si ya existe lo actualiza
    if(!localStorage.getItem(`item${index}`)){
        servicios[index].sumar();
        $(`#presupuesto__items--precio-${index}`).html(`$${servicios[index].cantidad * `${servicios[index].precio}`}`);
        $(`#presupuesto__items--cantidad-${index}`).html(`${servicios[index].cantidad}`);
        localStorage.setItem(`item${index}`, JSON.stringify(servicios[index]));
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
    for(let i = 0; i < servicios.length; i++){
        servicios[i].cantidad = 0;
    }
});

let URL = 'http://hp-api.herokuapp.com/api/characters';

$.get(URL, function(respuesta, estado) {
    if(estado === 'success'){
        let personajes = respuesta;
        $('#tituloPresupuesto').html(`Este es tu presupuesto, ${personajes[random(0,25)].name} 🪄✨`)
    }
})

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

