define(
    [
        'angular'
    ],
    function (angular) {
        'use strict';

        return function emailEditorController($scope) {
            var vm = this;

            vm.getSumOfFinishedStories = getSumOfFinishedStories;
            vm.addSimpleInputRow = addSimpleInputRow;
            vm.removeSimpleInputRow = removeSimpleInputRow;


            function addSimpleInputRow(collection) {
                collection.push({
                    text: ''
                });
            }

            function removeSimpleInputRow(collection, itemIndex) {
                collection.splice(itemIndex, 1);
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
