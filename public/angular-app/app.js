/*global angular HotelsController HotelController*/
angular.module('meanhotel', ['ngRoute', 'angular-jwt']).config(config);

function config($routeProvider) {
    $routeProvider
    .when('/hotels', {
        templateUrl: 'angular-app/hotel-list/hotels.html',
        controller: HotelsController,
        controllerAs:'vm'
    })
    .when('/hotel/:id', {
        templateUrl: 'angular-app/hotel-display/hotel.html',
        controller: HotelController,
        controllerAs:'vm'
    });
}