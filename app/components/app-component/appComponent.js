define([
    'angular',
    './appComponentController',
    '../email-editor/emailEditor',
    '../email-preview/emailPreview',
], function (angular, appComponentController, emailEditor, emailPreview) {
    'use strict';

    return angular.module('newsletterExporter.appComponent', [emailEditor, emailPreview])
        .controller('appComponentController', appComponentController)
        .name;
});
