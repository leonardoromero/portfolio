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
    let item = document.createElement('div');
    item.className = `presupuestador__servicio presupuestador__servicio--${servicio.codigo}`;
    item.innerHTML = `<div class="presupuestador__servicio--titulo">${servicio.nombre}</div>
                    <div class="presupuestador__servicio--precio">$${servicio.precio}</div>`;
    document.getElementById('servicios').appendChild(item);

}

// DOM
let servicio1 = document.getElementById("servicios").children[0];
let servicio2 = document.getElementById("servicios").children[1];
let servicio3 = document.getElementById("servicios").children[2];
let servicio4 = document.getElementById("servicios").children[3];
let servicio5 = document.getElementById("servicios").children[4];
let servicio6 = document.getElementById("servicios").children[5];
let servicio7 = document.getElementById("servicios").children[6];

let total = 0;

// Event listeners para agregar al presupuesto cada servicio seleccionado, que a su vez se almacena en localStorage
servicio1.onclick = () => {
    servicio1.classList.toggle('presupuestador__servicio--selected');
    total += servicios[0].precio;
    document.getElementById('total').innerHTML = `Total $${total}`;

    document.getElementById('presupuesto').style.display = 'block';
    
    let listaItems = document.getElementById('presupuesto__items');
    let itemPresupuesto = listaItems.appendChild(document.createElement('div'));
    itemPresupuesto.id = `item-1`;
    document.getElementById('item-1').innerHTML = `<div class="presupuesto__items--titulo">${servicios[0].nombre}</div>
                                                <div class="presupuesto__items--precio">$${servicios[0].precio}</div>`;

    localStorage.setItem('item1', JSON.stringify(servicios[0]));
};

servicio2.onclick = () => {
    servicio2.classList.toggle('presupuestador__servicio--selected');
    total += servicios[1].precio;
    document.getElementById('total').innerHTML = `Total $${total}`;

    document.getElementById('presupuesto').style.display = 'block';
    
    let listaItems = document.getElementById('presupuesto__items');
    let itemPresupuesto = listaItems.appendChild(document.createElement('div'));
    itemPresupuesto.id = `item-2`;
    document.getElementById('item-2').innerHTML = `<div class="presupuesto__items--titulo">${servicios[1].nombre}</div>
                                                <div class="presupuesto__items--precio">$${servicios[1].precio}</div>`;

    localStorage.setItem('item2', JSON.stringify(servicios[1]));
};

servicio3.onclick = () => {
    servicio3.classList.toggle('presupuestador__servicio--selected');
    total += servicios[2].precio;
    document.getElementById('total').innerHTML = `Total $${total}`;

    document.getElementById('presupuesto').style.display = 'block';
    
    let listaItems = document.getElementById('presupuesto__items');
    let itemPresupuesto = listaItems.appendChild(document.createElement('div'));
    itemPresupuesto.id = `item-3`;
    document.getElementById('item-3').innerHTML = `<div class="presupuesto__items--titulo">${servicios[2].nombre}</div>
                                                <div class="presupuesto__items--precio">$${servicios[2].precio}</div>`;

    localStorage.setItem('item3', JSON.stringify(servicios[2]));
};

servicio4.onclick = () => {
    servicio4.classList.toggle('presupuestador__servicio--selected');
    total += servicios[3].precio;
    document.getElementById('total').innerHTML = `Total $${total}`;

    document.getElementById('presupuesto').style.display = 'block';
    
    let listaItems = document.getElementById('presupuesto__items');
    let itemPresupuesto = listaItems.appendChild(document.createElement('div'));
    itemPresupuesto.id = `item-4`;
    document.getElementById('item-4').innerHTML = `<div class="presupuesto__items--titulo">${servicios[3].nombre}</div>
                                                <div class="presupuesto__items--precio">$${servicios[3].precio}</div>`;

    localStorage.setItem('item4', JSON.stringify(servicios[3]));
};

servicio5.onclick = () => {
    servicio5.classList.toggle('presupuestador__servicio--selected');
    total += servicios[4].precio;
    document.getElementById('total').innerHTML = `Total $${total}`;

    document.getElementById('presupuesto').style.display = 'block';
    
    let listaItems = document.getElementById('presupuesto__items');
    let itemPresupuesto = listaItems.appendChild(document.createElement('div'));
    itemPresupuesto.id = `item-5`;
    document.getElementById('item-5').innerHTML = `<div class="presupuesto__items--titulo">${servicios[4].nombre}</div>
                                                <div class="presupuesto__items--precio">$${servicios[4].precio}</div>`;

    localStorage.setItem('item5', JSON.stringify(servicios[4]));
};

servicio6.onclick = () => {
    servicio6.classList.toggle('presupuestador__servicio--selected');
    total += servicios[5].precio;
    document.getElementById('total').innerHTML = `Total $${total}`;

    document.getElementById('presupuesto').style.display = 'block';
    
    let listaItems = document.getElementById('presupuesto__items');
    let itemPresupuesto = listaItems.appendChild(document.createElement('div'));
    itemPresupuesto.id = `item-6`;
    document.getElementById('item-6').innerHTML = `<div class="presupuesto__items--titulo">${servicios[5].nombre}</div>
                                                <div class="presupuesto__items--precio">$${servicios[5].precio}</div>`;

    localStorage.setItem('item6', JSON.stringify(servicios[5]));
};

servicio7.onclick = () => {
    servicio7.classList.toggle('presupuestador__servicio--selected');
    total += servicios[6].precio;
    document.getElementById('total').innerHTML = `Total $${total}`;

    document.getElementById('presupuesto').style.display = 'block';
    
    let listaItems = document.getElementById('presupuesto__items');
    let itemPresupuesto = listaItems.appendChild(document.createElement('div'));
    itemPresupuesto.id = `item-7`;
    document.getElementById('item-7').innerHTML = `<div class="presupuesto__items--titulo">${servicios[6].nombre}</div>
                                                <div class="presupuesto__items--precio">$${servicios[6].precio}</div>`;

    localStorage.setItem('item7', JSON.stringify(servicios[6]));
};

// Comprueba si localStorage contiene elementos y, de ser así, los mantiene en el presupuesto
if(localStorage.length != 0){
    document.getElementById('presupuesto').style.display = 'block';
    for(let i = 0; i < localStorage.length; i++){
        console.log(JSON.parse(localStorage.getItem(localStorage.key(0))).nombre);
        let clave = localStorage.key(i);
        let listaItems = document.getElementById('presupuesto__items');
        let itemPresupuesto = listaItems.appendChild(document.createElement('div'));
        itemPresupuesto.id = `item-${i}`;
        document.getElementById(`item-${i}`).innerHTML = `<div class="presupuesto__items--titulo">${JSON.parse(localStorage.getItem(localStorage.key(i))).nombre}</div>
                                                <div class="presupuesto__items--precio">$${JSON.parse(localStorage.getItem(localStorage.key(i))).precio}</div>`;

        total += JSON.parse(localStorage.getItem(localStorage.key(i))).precio;
        document.getElementById('total').innerHTML = `Total $${total}`;
    }
} else {
    document.getElementById('presupuesto').style.display = 'none';
}

// Borra el localStorage al presional el botón
document.getElementById('clear-btn').onclick = () => {
    localStorage.clear();
    location.reload();
}