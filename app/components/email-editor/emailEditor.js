define([
    'angular',
    './emailEditorController'
], function (angular, emailEditorController) {
    'use strict';

    return angular.module('newsletterExporter.emailEditor', [])
        .component('emailEditor', {
            controller: emailEditorController,
            controllerAs: 'vm',
            templateUrl: './components/email-editor/emailEditor.html',
            bindings: {
                content: '='
            }
        })
        .name;
});
