define([
    'angular',
    'jquery',
    './components/app-component/appComponent'
], function (angular, $, appComponent) {
    'use strict';

    return angular.module('newsletterExporter', [
            appComponent
        ])
        .config(['$compileProvider', function ($compileProvider) {
            $compileProvider.debugInfoEnabled(false);
        }])
        .name;
});
