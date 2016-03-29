/**
 * Articulos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  	id:{
			type:'integer',
			primaryKey: true,
			autoIncrement: true,
		},
		nombre:'string',
		almacen:{
			model: 'Almacenes',
		},
		grupo:{
			model: 'Grupos',
		},
		marca:{
			model: 'Marcas',
		},
		tipoUnidad:{
			model: 'TipoUnidades',
		},
		proveedor:{
			model: 'Proveedores',
		},
		precioEntrada:'float',
		minimo:'integer',
		precioSalida:'float',
		stock:'integer',
		descripcion:'text',
		estado:{
			type:'integer',
			defaultsTo: 1
		}
  }
};

