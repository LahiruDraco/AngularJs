var app=angular.module('spa',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'home.html'
    })
    .when('/',{
        templateUrl:'about.html'
    });
});
app.controller('cfgcontroller',function($scope){

});