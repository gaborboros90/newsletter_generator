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
            vm.addCustomFieldGroup = addCustomFieldGroup;
            vm.addCustomFieldRow = addCustomFieldRow;

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

                vm.model.releaseStatistics.finishedStories.storyTypes.forEach(function (story) {
                    sumOfFinishedStories += story.value;
                });

                vm.model.releaseStatistics.finishedStories.sum = sumOfFinishedStories;

                return sumOfFinishedStories;
            }

            function addNewActualThing() {
                vm.model.actualThings.listWithImages.push({
                    title: '',
                    images: []
                });
            }

            function removeActualThing(itemIndex) {
                vm.model.actualThings.listWithImages.splice(itemIndex, 1);
            }

            function addCustomFieldGroup() {
                vm.model.actualThings.customFields.push({
                    title: '',
                    fieldRows: [{
                        text: '',
                        hrefText: '',
                        href: ''
                    }]
                });
            }

            function addCustomFieldRow(customFieldRowCollection) {
                customFieldRowCollection.push({
                    text: '',
                    hrefText: '',
                    href: ''
                });
            }
        };
    }
);
