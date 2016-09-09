/**
 * Created by tavete on 8/26/16.
 */
'use strict';

app.config(function($routeProvider){
    $routeProvider.when('/',
        {
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardCtrl'
        })

    $routeProvider.when('/pacientes',
        {
            templateUrl: 'templates/pacientes.html',
            controller: 'PacientesCtrl'
        })

    $routeProvider.when('/equipo-medico',
        {
            templateUrl: 'templates/equipo-medico.html',
            controller: 'EquipoMedicoCtrl'
        })

    $routeProvider.when('/prestaciones',
        {
            templateUrl: 'templates/prestaciones.html',
            controller: 'PrestacionesCtrl'
        })

    $routeProvider.when('/presupuestos',
        {
            templateUrl: 'templates/presupuestos.html',
            controller: 'PresupuestosCtrl'
        })
})