define([
    'angular',
    './emailPreviewController',
    '../email-exporter/emailExporter'
], function (angular, emailPreviewController, emailExporter) {
    'use strict';

    return angular.module('newsletterExporter.emailPreview', [])
        .component('emailPreview', {
            controller: emailPreviewController,
            controllerAs: 'vm',
            templateUrl: './components/email-preview/emailPreview.html',
            bindings: {
                model: '='
            }
        })
        .directive('emailExporter', emailExporter)
        .name;
});
