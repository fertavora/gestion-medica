/**
 * Created by tavete on 11/09/16.
 */

app.factory('dataService', function($http){
   return {
       getProvincias: function(response, error){
           $http.get('http://localhost:5000/provincias').then(response, error);
       }
   }
});