angular.module('de.angular-mobile-nav', [])
    .run(['$rootScope', 'mobileNav', function($rootScope, mobileNav) {
        $rootScope.mobileNav = mobileNav;
    }])
    .factory("mobileNav", function() {
        var navigation = {};

        navigation.toggle = function toggle() {
            var navigation = angular.element(document.querySelector('.de-nav'));
            navigation.toggleClass('show');
        };

        navigation.show = function show() {
            var navigation = angular.element(document.querySelector('.de-nav'));
            navigation.addClass('show');
        };

        navigation.hide = function hide() {
            var navigation = angular.element(document.querySelector('.de-nav'));
            navigation.removeClass('show');
        };

        return navigation;
    });