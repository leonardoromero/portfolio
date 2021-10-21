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