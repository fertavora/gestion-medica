'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.agendasGET = function agendasGET (req, res, next) {
  Default.agendasGET(req.swagger.params, res, next);
};

module.exports.clientesGET = function clientesGET (req, res, next) {
  Default.clientesGET(req.swagger.params, res, next);
};

module.exports.obras_socialesGET = function obras_socialesGET (req, res, next) {
  Default.obras_socialesGET(req.swagger.params, res, next);
};

module.exports.prestacionesGET = function prestacionesGET (req, res, next) {
  Default.prestacionesGET(req.swagger.params, res, next);
};

module.exports.presupuestosGET = function presupuestosGET (req, res, next) {
  Default.presupuestosGET(req.swagger.params, res, next);
};
