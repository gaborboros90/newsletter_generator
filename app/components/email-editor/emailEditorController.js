define(
    [
        'angular'
    ],
    function (angular) {
        'use strict';

        return function emailEditorController($parse, $scope, $attrs) {
            var vm = this;

            this.headerText = 'Email editor';
        };
    }
);
