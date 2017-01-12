define(
    [
        'angular'
    ],
    function (angular) {
        'use strict';

        return function emailEditorController($scope) {
            var vm = this;

            vm.removeHighlightFeature = removeHighlightFeature;
            vm.addHighlightFeature = addHighlightFeature;
            vm.addHighlightMvt = addHighlightMvt;
            vm.removeHighlightMvt = removeHighlightMvt;
            vm.getSumOfFinishedStories = getSumOfFinishedStories;


            function removeHighlightFeature(index) {
                vm.model.highlight.features.featureList.splice(index, 1);
            }

            function addHighlightFeature() {
                vm.model.highlight.features.featureList.push({
                    text: ''
                });
            }

            function addHighlightMvt() {
                vm.model.highlight.mvts.mvtList.push({
                    text: ''
                });
            }

            function removeHighlightMvt(index) {
                vm.model.highlight.mvts.mvtList.splice(index, 1);
            }

            function getSumOfFinishedStories() {
                var sumOfFinishedStories = 0;

                vm.model.releaseStatistics.finishedStories.podStat.forEach(function(pod) {
                    sumOfFinishedStories += pod.value;
                });

                return sumOfFinishedStories;
            }
        };
    }
);
