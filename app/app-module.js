define([
    'angular',
    'jquery',
    './components/app-component/appComponent',
    './shared/toggle/toggleDirective'
], function (angular, $, appComponent, toggleDirective) {
    'use strict';

    return angular.module('newsletterExporter', [
            appComponent
        ])
        .directive('neToggle', toggleDirective)
        .config(['$compileProvider', function ($compileProvider) {
            $compileProvider.debugInfoEnabled(false);
        }])
        .name;
});
