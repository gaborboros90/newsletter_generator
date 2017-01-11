define(
    [
        'angular'
    ],
    function (angular) {
        'use strict';

        return function emailEditorController($scope) {
            var vm = this;

            vm.removeHighlightFeature = function (index) {
                vm.model.highlight.features.featureList.splice(index, 1);
            };

            vm.addHighlightFeature = function () {
                vm.model.highlight.features.featureList.push({
                    text: ''
                });
            };

            vm.addHighlightMvt = function () {
                vm.model.highlight.mvts.mvtList.push({
                    text: ''
                });
            };

            vm.removeHighlightMvt = function (index) {
                vm.model.highlight.mvts.mvtList.splice(index, 1);
            };
        };
    }
);
