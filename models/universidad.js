const { Schema, model } = require('mongoose');

const UniversidadSchema = Schema({
    nombre : {
        type: String,
        required: [true, 'Nombre requerido'],
        unique: [true]
    },
    direccion : {
        type: String,
        required: [true, 'Dirección requerido'],
        unique: [true]
    },
    telefono : {
        type: String,
        required: [true, 'Numero de teléfono requerido'],
        unique: [true]
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }

});

module.exports = model('Universidad', UniversidadSchema);