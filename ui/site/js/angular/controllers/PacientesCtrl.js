/**
 * Created by tavete on 8/26/16.
 */
'use strict'

app.controller('PacientesCtrl', function PacientesCtrl($scope, dataService, pacientesService){
    $scope.formPaciente = false
    $scope.hayPacientes = false
    $scope.showFormPaciente = function(){
        $scope.formPaciente ? $scope.formPaciente = false : $scope.formPaciente = true
    }

    $scope.paciente = {}
    $scope.paciente.domicilio = {}
    // $scope.paciente.domicilio.provincia = {}
    // $scope.paciente.domicilio.ciudad = {}
    $scope.paciente.obra_social= {}

    dataService.getProvincias(function(response){
        $scope.provincias = response.data;
        $scope.paciente.domicilio.provincia = $scope.provincias[4]
        $scope.ciudades = $scope.provincias[4].ciudades;
        $scope.paciente.domicilio.ciudad = $scope.ciudades[0]
    }, function(error){
        console.log("error provincias")
    })

    $scope.cambiarCiudades = function(){
        var i = $scope.paciente.domicilio.provincia.id
        var a = $scope.provincias.findIndex(j => j.id === i)
        $scope.ciudades = $scope.provincias[a].ciudades;
        $scope.paciente.domicilio.ciudad = $scope.ciudades[0]
    }

    $scope.provincias =
    $scope.obrasSociales = [
        { "nombre": "OSDE" },
        { "nombre": "Swiss Medical" },
        { "nombre": "Medicus" },
        { "nombre": "Galeno" },
        { "nombre": "Omint" },
        { "nombre": "Osdepym" },
        { "nombre": "Accord Salud" }
    ]

    $scope.paciente.obra_social.nombre = $scope.obrasSociales[0]

    var putPacienteOk = function(){
        console.log("paciente guardado")
    }

    $scope.submitNuevoPaciente = function(paciente, formNuevoPaciente){
        if(formNuevoPaciente.$valid){
                $scope.paciente.domicilio.provincia = $scope.paciente.domicilio.provincia.nombre
                $scope.paciente.domicilio.ciudad = $scope.paciente.domicilio.ciudad.nombre

            pacientesService.putPaciente(putPacienteOk, $scope.onError, $scope.paciente)
        }
    }

    //fake data
    $scope.pacientes = [
        {
            "nombre": "Kelsie",
            "apellido": "Bright",
            "dni": "42113334"
        },
        {
            "nombre": "Blaze",
            "apellido": "Bean",
            "dni": "15096745"
        },
        {
            "nombre": "Rinah",
            "apellido": "Atkins",
            "dni": "8767306"
        },
        {
            "nombre": "Yvonne",
            "apellido": "Hatfield",
            "dni": "29073439"
        },
        {
            "nombre": "Rina",
            "apellido": "Kline",
            "dni": "21242557"
        },
        {
            "nombre": "Ryder",
            "apellido": "Keith",
            "dni": "48674575"
        },
        {
            "nombre": "Aquila",
            "apellido": "Mccall",
            "dni": "8737412"
        },
        {
            "nombre": "Rebekah",
            "apellido": "Mays",
            "dni": "50710384"
        },
        {
            "nombre": "Erin",
            "apellido": "Pennington",
            "dni": "13980414"
        },
        {
            "nombre": "Alexa",
            "apellido": "Coffey",
            "dni": "21533646"
        }]
})