define([
    'angular',
    './emailEditorController',
    '../image-uploader/imageUploader'
], function (angular, emailEditorController, imageUploader) {
    'use strict';

    return angular.module('newsletterExporter.emailEditor', [])
        .component('emailEditor', {
            controller: emailEditorController,
            controllerAs: 'vm',
            templateUrl: './components/email-editor/emailEditor.html',
            bindings: {
                model: '='
            }
        })
        .directive('imageUploader', imageUploader)
        .name;
});
