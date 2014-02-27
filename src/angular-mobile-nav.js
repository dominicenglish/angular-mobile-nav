angular.module('de.angular-mobile-nav', [])
    .run(['$rootScope', 'mobileNav', function($rootScope, mobileNav) {
        $rootScope.mobileNav = mobileNav;
    }])
    .factory("mobileNav", function() {
        var navigation = {};

        navigation.toggle = function toggle() {
            var navigation = angular.element(document.querySelector('.de-nav'));
            navigation.toggleClass('show');
            var content = angular.element(document.querySelector('.de-content'));
            content.toggleClass('nav-open');
        };

        navigation.show = function show() {
            var navigation = angular.element(document.querySelector('.de-nav'));
            navigation.addClass('show');
            var content = angular.element(document.querySelector('.de-content'));
            content.addClass('nav-open');
        };

        navigation.hide = function hide() {
            var navigation = angular.element(document.querySelector('.de-nav'));
            navigation.removeClass('show');
            var content = angular.element(document.querySelector('.de-content'));
            content.removeClass('nav-open');
        };

        return navigation;
    });