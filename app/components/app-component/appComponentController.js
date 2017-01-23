define(
    [
        'angular'
    ],
    function (angular) {
        'use strict';

        return function appComponentController($scope) {
            $scope.vm = {
                model: {
                    header: {
                        title: 'Header',
                        releaseInfo: {
                            title: 'Release number',
                            value: '2017.R01'
                        }
                    },
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
                        title: 'Anniversaries',
                        birthdays: {
                            title: 'Birthdays',
                            personList: []
                        },
                        landingAnniversaries: {
                            title: 'Landing anniversaries',
                            personList: []
                        }
                    },
                    actualThings: {
                        title: 'Actual things',
                        list: []
                    }
                }
            };
        };
    }
);
