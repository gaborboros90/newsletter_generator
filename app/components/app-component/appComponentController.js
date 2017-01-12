define(
    [
        'angular'
    ],
    function (angular) {
        'use strict';

        return function appComponentController($scope) {
            $scope.vm = {
                model: {
                    highlight: {
                        title: 'Highlight',
                        features: {
                            title: 'Bigger features',
                            featureList: [
                                {
                                    text: ''
                                }
                            ]
                        },
                        mvts: {
                            title: 'New MVT-s',
                            mvtList: []
                        }
                    },
                    releaseStatistics: {
                        title: 'Release statistics',
                        finishedStories: {
                            title: 'Finished stories',
                            podStat: [
                                {
                                    name: 'LPS1',
                                    value: 0
                                },
                                {
                                    name: 'LPS2',
                                    value: 0
                                },
                                {
                                    name: 'LPS3',
                                    value: 0
                                },
                                {
                                    name: 'LPS4',
                                    value: 0
                                }
                            ],
                            sum: 0
                        },
                        bugRelatedStatistics: {
                            title: 'Bug related statistics',
                            raisedBugs: 0,
                            resolvedBug: 0
                        }
                    },
                    anniversaries: {
                        birthdays: {
                            title: 'Birthdays',
                            list: [],
                        },
                        landingAnniversaries: {
                            title: 'Landing anniversaries',
                            list: []
                        }
                    },
                    actualThings: [
                        {
                            title: '',
                            imgData: ''
                        },
                        {
                            title: '',
                            imgData: ''
                        }
                    ]
                }
            };
        };
    }
);
