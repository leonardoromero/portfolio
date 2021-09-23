class Servicio {
    constructor(codigo, tipo, nombre, dias, precio) {
        this.codigo = codigo;
        this.tipo = tipo;
        this.nombre = nombre;
        this.dias = dias;
        this.precio = precio;
    }
    presupuesto() {
        const checkOutNombres = [];
        let checkOutDias = 0;
        let checkOutPrecio = 0;
        let pedido = prompt(`Para presupuestar su proyecto, ingrese los códigos identificadores de los servicios deseados: \n\
        1. ${servicios[0].nombre} \n\
        2. ${servicios[1].nombre} \n\
        3. ${servicios[2].nombre} \n\
        4. ${servicios[3].nombre} \n\
        5. ${servicios[4].nombre} \n\
        6. ${servicios[5].nombre} \n\
        `);
                   
        for(let i = 0; i < pedido.length; i++){
            switch(pedido.charAt(i)){
                case '1': 
                    checkOutNombres.push('✅ ' + servicios[0].nombre);
                    checkOutDias += servicios[0].dias;
                    checkOutPrecio += servicios[0].precio;
                    break;
                case '2': 
                    checkOutNombres.push('✅ ' + servicios[1].nombre);
                    checkOutDias += servicios[1].dias;
                    checkOutPrecio += servicios[1].precio;
                    break;
                case '3': 
                    checkOutNombres.push('✅ ' + servicios[2].nombre);
                    checkOutDias += servicios[2].dias;
                    checkOutPrecio += servicios[2].precio;
                    break;
                case '4': 
                    checkOutNombres.push('✅ ' + servicios[3].nombre);
                    checkOutDias += servicios[3].dias;
                    checkOutPrecio += servicios[3].precio;
                    break;
                case '5': 
                    checkOutNombres.push('✅ ' + servicios[4].nombre);
                    checkOutDias += servicios[4].dias;
                    checkOutPrecio += servicios[4].precio;
                    break;
                case '6': 
                    checkOutNombres.push('✅ ' + servicios[5].nombre);
                    checkOutDias += servicios[5].dias;
                    checkOutPrecio += servicios[5].precio;
                    break;
            }            
        }

        if(checkOutNombres != ''){
            alert(`Usted eligió los siguientes servicios: \n\n${checkOutNombres.join('\n')}\n\n \
            El total de su proyecto es de $${checkOutPrecio} y llevará aproximadamente ${checkOutDias} dias.`);
        } else {
            alert('Ingrese un código válido')
            this.presupuesto();
        }

    }
}

const disenio = new Servicio(1, 'Diseño', 'Diseño web integral sin maquetado', 7, 10000);
const maquetado = new Servicio(2, 'Desarrollo', 'Maquetado (sin diseño)', 21, 10000);
const desarrollo = new Servicio(3, 'Desarrollo', 'Diseño y maquetado', 30, 18000);
const hosting = new Servicio(4, 'Desarrollo', 'Trámites de creación del dominio + cloud hosting', 4, 4000);
const logo = new Servicio(5, 'Diseño', 'Diseño de logo', 3, 4000);
const canva = new Servicio(6, 'Diseño', 'Diseño de banners y flyers multiplataforma', 7, 8000);
const mantenimiento = new Servicio(7, 'Mantenimiento', 'Mantenimiento mensual', 0, 1500);

const servicios = [disenio, maquetado, desarrollo, hosting, logo, canva, mantenimiento];

for(let servicio of servicios){
    let item = document.createElement('div');
    item.className = `presupuestador__servicio presupuestador__servicio--${servicio.codigo} presupuestador__servicio--not-selected`;
    item.innerHTML = `<div class="presupuestador__servicio--titulo">${servicio.nombre}</div>
                    <div class="presupuestador__servicio--precio">$${servicio.precio}</div>`;
    document.getElementById('servicios').appendChild(item);

}

let servicio1 = document.getElementById("servicios").children[0];
let servicio2 = document.getElementById("servicios").children[1];
let servicio3 = document.getElementById("servicios").children[2];
let servicio4 = document.getElementById("servicios").children[3];
let servicio5 = document.getElementById("servicios").children[4];
let servicio6 = document.getElementById("servicios").children[5];
let servicio7 = document.getElementById("servicios").children[6];

servicio1.onclick = () => {
    servicio1.classList.toggle('presupuestador__servicio--selected');
    carrito.push(servicios[0].nombre);
};
servicio2.onclick = () => {
    servicio2.classList.toggle('presupuestador__servicio--selected');
    carrito.push(servicios[1].nombre);
};
servicio3.onclick = () => {
    servicio3.classList.toggle('presupuestador__servicio--selected');
    carrito.push(servicios[2].nombre);
};
servicio4.onclick = () => {
    servicio4.classList.toggle('presupuestador__servicio--selected');
    carrito.push(servicios[3].nombre);
};
servicio5.onclick = () => {
    servicio5.classList.toggle('presupuestador__servicio--selected');
    carrito.push(servicios[4].nombre);
};
servicio6.onclick = () => {
    servicio6.classList.toggle('presupuestador__servicio--selected');
    carrito.push(servicios[5].nombre);
};
servicio7.onclick = () => {
    servicio7.classList.toggle('presupuestador__servicio--selected');
    carrito.push(servicios[6].nombre);
};

const carrito = [];
console.log(carrito);

