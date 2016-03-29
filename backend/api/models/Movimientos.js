/**
 * Movimientos.js
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
  		almacen:{
  			model: 'Almacenes',
  		},
  		tipoMovimiento:{
  			model: 'TipoMovimientos',
  		},
  		fechaMovimiento:'datetime',
  		subtotal:'float',
  		total:'float',
  		usuario:{
  			model: 'Usuarios',
  		},
  		descripcion:'text',
  		estado:{
  			type:'integer',
  			defaultsTo: 1
  		}
  }
};

