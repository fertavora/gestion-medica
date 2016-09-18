/**
 * Created by tavete on 13/09/16.
 */

app.factory('pacientesService', function($http){
    return {
        putPaciente: function(response, error, data){
            $http.post('http://localhost:5000/pacientes', data)
                .then(response, error);
        }
    }
});