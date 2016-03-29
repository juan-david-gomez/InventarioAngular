/**
 * Usuarios.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	id:{
  		type:'integer',
  		primaryKey:true,
  		autoIncrement:true,
  	},
  	nombre:'string',
  	email:'email',
  	telefono:'string',
  	rol:'integer',
  	estado:{
  		type:'integer',
  		defaultsTo: 1
  	}
  }
};

