/**
 * Created by tavete on 8/26/16.
 */
'use strict'

app.controller('PacientesCtrl', function PacientesCtrl($scope){
    $scope.formPaciente = false
    $scope.hayPacientes = false
    $scope.showFormPaciente = function(){
        $scope.formPaciente ? $scope.formPaciente = false : $scope.formPaciente = true
    }

    $scope.obrasSociales = [
        { "nombre": "OSDE" },
        { "nombre": "Swiss Medical" },
        { "nombre": "Medicus" },
        { "nombre": "Galeno" },
        { "nombre": "Omint" },
        { "nombre": "Osdepym" },
        { "nombre": "Accord Salud" }
    ]
    $scope.paciente = {}
    $scope.paciente.obra_social = $scope.obrasSociales[0]
    $scope.paciente.provincia = $scope.provincias[4]

    $scope.submitNuevoPaciente = function(paciente, formNuevoPaciente){
        if(formNuevoPaciente.$valid){
            console.log($scope.paciente)
            //todo seguir con guardar paciente y feedback
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