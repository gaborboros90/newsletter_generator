define([
    'angular',
    './emailPreviewController'
], function (angular, emailPreviewController) {
    'use strict';

    return angular.module('newsletterExporter.emailPreview', [])
        .component('emailPreview', {
            controller: emailPreviewController,
            controllerAs: 'vm',
            templateUrl: './components/email-preview/emailPreview.html',
            bindings: {
                content: '='
            }
        })
        .name;
});
