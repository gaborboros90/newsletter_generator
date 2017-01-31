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
                        title: 'Highlights',
                        features: {
                            title: 'Major features',
                            groups: [{
                                groupTitle: 'default',
                                featureList: [
                                    {
                                        text: '',
                                        link: ''
                                    }
                                ]
                            }]
                        },
                        mvts: {
                            title: 'New MVTs',
                            mvtList: []
                        }
                    },
                    releaseStatistics: {
                        title: 'Release statistics',
                        finishedStories: {
                            title: 'Finished stories',
                            storyTypes: [
                                {
                                    name: 'Feature',
                                    value: 0
                                },
                                {
                                    name: 'Technical',
                                    value: 0
                                },
                                {
                                    name: 'QA',
                                    value: 0
                                }
                            ],
                            sum: 0
                        },
                        bugRelatedStatistics: {
                            title: 'Bug related statistics',
                            classifications: [
                                {
                                    title: 'New feature',
                                    resolutionList: [
                                        {
                                            text: 'Fixed',
                                            raisedBugs: 0,
                                            closedBugs: 0
                                        },
                                        {
                                            text: 'Working as designed',
                                            raisedBugs: 0,
                                            closedBugs: 0
                                        },
                                        {
                                            text: 'Duplicated',
                                            raisedBugs: 0,
                                            closedBugs: 0
                                        },
                                        {
                                            text: 'User error',
                                            raisedBugs: 0,
                                            closedBugs: 0
                                        },
                                        {
                                            text: 'Will not fix',
                                            raisedBugs: 0,
                                            closedBugs: 0
                                        },
                                        {
                                            text: 'Cannot repro',
                                            raisedBugs: 0,
                                            closedBugs: 0
                                        }
                                    ]
                                },
                                {
                                    title: 'Regression',
                                    resolutionList: [
                                        {
                                            text: 'Fixed',
                                            raisedBugs: 0,
                                            closedBugs: 0
                                        },
                                        {
                                            text: 'Working as designed',
                                            raisedBugs: 0,
                                            closedBugs: 0
                                        },
                                        {
                                            text: 'Duplicated',
                                            raisedBugs: 0,
                                            closedBugs: 0
                                        },
                                        {
                                            text: 'User error',
                                            raisedBugs: 0,
                                            closedBugs: 0
                                        },
                                        {
                                            text: 'Will not fix',
                                            raisedBugs: 0,
                                            closedBugs: 0
                                        },
                                        {
                                            text: 'Cannot repro',
                                            raisedBugs: 0,
                                            closedBugs: 0
                                        }
                                    ]
                                },
                                {
                                    title: 'Production',
                                    resolutionList: [
                                        {
                                            text: 'Fixed',
                                            raisedBugs: 0,
                                            closedBugs: 0
                                        },
                                        {
                                            text: 'Working as designed',
                                            raisedBugs: 0,
                                            closedBugs: 0
                                        },
                                        {
                                            text: 'Duplicated',
                                            raisedBugs: 0,
                                            closedBugs: 0
                                        },
                                        {
                                            text: 'User error',
                                            raisedBugs: 0,
                                            closedBugs: 0
                                        },
                                        {
                                            text: 'Will not fix',
                                            raisedBugs: 0,
                                            closedBugs: 0
                                        },
                                        {
                                            text: 'Cannot repro',
                                            raisedBugs: 0,
                                            closedBugs: 0
                                        }
                                    ]
                                }
                            ]
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
                        title: 'Social events during the release',
                        list: []
                    }
                }
            };
        };
    }
);
