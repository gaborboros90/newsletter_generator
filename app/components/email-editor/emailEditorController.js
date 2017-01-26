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
            vm.removeItemFromCollection = removeItemFromCollection;
            vm.addNewActualThing = addNewActualThing;
            vm.removeActualThing = removeActualThing;
            vm.addInputRowWithLink = addInputRowWithLink;
            vm.addFeatureGroup = addFeatureGroup;

            function addFeatureGroup() {
                vm.model.highlight.features.groups.push({
                    groupTitle: '',
                    featureList: [
                        {
                            text: '',
                            link: ''
                        }
                    ]
                });
            }

            function addSimpleInputRow(collection) {
                collection.push({
                    text: ''
                });
            }

            function addInputRowWithLink(collection) {
                collection.push({
                    text: '',
                    href: ''
                });
            }

            function removeItemFromCollection(collection, itemIndex) {
                collection.splice(itemIndex, 1);
            }

            function getSumOfFinishedStories() {
                var sumOfFinishedStories = 0;

                vm.model.releaseStatistics.finishedStories.podStat.forEach(function (pod) {
                    sumOfFinishedStories += pod.value;
                });

                vm.model.releaseStatistics.finishedStories.sum = sumOfFinishedStories;

                return sumOfFinishedStories;
            }

            function addNewActualThing() {
                vm.model.actualThings.list.push({
                    title: '',
                    images: []
                });
            }

            function removeActualThing(itemIndex) {
                vm.model.actualThings.list.splice(itemIndex, 1);
            }
        };
    }
);
