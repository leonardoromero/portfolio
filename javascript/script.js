class Servicio {
    constructor(codigo, tipo, nombre, dias, precio) {
        this.codigo = codigo;
        this.tipo = tipo;
        this.nombre = nombre;
        this.dias = dias;
        this.precio = precio;
    }
}

const disenio = new Servicio(1, 'Diseño', 'Diseño web integral sin maquetado', 7, 10000);
const maquetado = new Servicio(2, 'Desarrollo', 'Maquetado (sin diseño)', 21, 10000);
const desarrollo = new Servicio(3, 'Desarrollo', '⚡ Diseño y maquetado', 30, 18000);
const hosting = new Servicio(4, 'Desarrollo', 'Trámites de creación del dominio + cloud hosting', 4, 4000);
const logo = new Servicio(5, 'Diseño', 'Diseño de logo', 3, 4000);
const canva = new Servicio(6, 'Diseño', 'Diseño de banners y flyers multiplataforma', 7, 8000);
const mantenimiento = new Servicio(7, 'Mantenimiento', 'Mantenimiento mensual', 0, 1500);

const servicios = [disenio, maquetado, desarrollo, hosting, logo, canva, mantenimiento];

// Se crea un div por cada elemento del array servicios
for(let servicio of servicios){
    $("#servicios").append(`<div class="presupuestador__servicio" id="presupuestador__servicio--${servicio.codigo}">
                                <div class="presupuestador__servicio--titulo">${servicio.nombre}</div>
                                <div class="presupuestador__servicio--precio">$${servicio.precio}</div>
                            </div>`);

}

let total = 0;

// Event listeners para agregar al presupuesto cada servicio seleccionado, que a su vez se almacena en localStorage
$('#servicios').on('click', (e) => {
    localStorage.setItem(`item${localStorage.length}`, JSON.stringify(servicios[(e.target.id).slice(-1)-1]));

    $(`${e.target.id}`).toggleClass('presupuestador__servicio--selected');
    total += parseInt((e.target.children[1].innerHTML).slice(1));
    $('#total').html(`Total $${total}`);
    $('#presupuesto').css({display: "block"});
    
    $('#presupuesto__items').append(`<div id="item-${localStorage.length-1}">
                                        <div class="presupuesto__items--titulo">${e.target.firstElementChild.innerHTML}</div>
                                        <div class="presupuesto__items--precio">${e.target.lastElementChild.innerHTML}</div>
                                    </div>`)
})

// Comprueba si localStorage contiene elementos y, de ser así, los mantiene en el presupuesto
if(localStorage.length != 0){
    $('#presupuesto').css({display: "block"});
    for(let i = 0; i < localStorage.length; i++){
        let clave = localStorage.key(i);
        
        $('#presupuesto__items').append(`<div id="item-${i}">
                                            <div class="presupuesto__items--titulo">${JSON.parse(localStorage.getItem(clave)).nombre}</div>
                                            <div class="presupuesto__items--precio">$${JSON.parse(localStorage.getItem(clave)).precio}</div>
                                        </div>`);
        total += JSON.parse(localStorage.getItem(clave)).precio;
        $('#total').html(`Total $${total}`);
    }
} else {
    $('#presupuesto').css({display: "none"});
}

// Borra el localStorage al presional el botón
$('#clear-btn').on('click', () => {
    localStorage.clear();
    location.reload();
});
