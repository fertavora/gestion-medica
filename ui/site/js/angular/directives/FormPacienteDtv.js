/**
 * Created by tavete on 8/27/16.
 */
'use strict';

app.directive('formPaciente', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/pacientes/form-paciente.html'
    }
})