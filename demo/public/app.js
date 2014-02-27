angular.module('angular-mobile-nav-demo', ['ngRoute', 'de.angular-mobile-nav'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .otherwise({
            templateUrl: "angular.html"
        });
}]);