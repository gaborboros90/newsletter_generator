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
                        finishedStories: {
                            title: 'Finished stories',
                            numbersByPod: [
                                {
                                    'LPS1': 0,
                                },
                                {
                                    'LPS2': 0,
                                },
                                {
                                    'LPS3': 0,
                                },
                                {
                                    'LPS4': 0,
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
