'use strict';

exports.agendasGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "subprestación" : "aeiou",
  "tecnologia" : "aeiou",
  "sucursal" : "aeiou",
  "medico" : "aeiou",
  "prestacion" : "aeiou",
  "dia" : 1.3579000000000001069366817318950779736042022705078125
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.clientesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "apellido" : "aeiou",
  "id" : "aeiou",
  "nombre" : "aeiou",
  "email" : "aeiou",
  "dni" : 123
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.obras_socialesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "id" : "aeiou",
  "nombre" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.prestacionesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "esTecnologia" : true,
  "id" : "aeiou",
  "parentPrestacion" : "aeiou",
  "nombre" : "aeiou",
  "precios" : [ {
    "fecha_desde" : 1.3579000000000001069366817318950779736042022705078125,
    "precio_unidad" : "",
    "fecha_hasta" : 1.3579000000000001069366817318950779736042022705078125
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.presupuestosGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "paciente" : "aeiou",
  "prestacion" : "aeiou",
  "forma_pago" : "aeiou",
  "mes" : "aeiou",
  "usuario" : "aeiou",
  "subprestacion" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

