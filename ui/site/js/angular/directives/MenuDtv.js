/**
 * Created by tavete on 8/20/16.
 */
'use strict';

app.directive('dtvMenu', function(){
    function metisMenu(){
        $('#side-menu').metisMenu();
    }

    return {
        link: metisMenu,
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/dtv-menu.html'
    }
})