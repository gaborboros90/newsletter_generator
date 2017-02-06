define(
    [
        'angular'
    ],
    function (angular) {
        'use strict';

        return function appComponentController($scope) {
            $scope.vm = {
                model: {
                    assets: {
                        title: 'Assets',
                        inputLabel: 'Assets PATH',
                        localPath: localStorage.getItem('LandingNewsletter:localPath') ? localStorage.getItem('LandingNewsletter:localPath') : '',
                        remotePath: '../../assets/images/',
                        path: '../../assets/images/'
                    },
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
                        title: 'Extras',
                        listWithImages: [],
                        customFields: []
                    }
                }
            };

            $scope.$watch('vm.model.assets.localPath', function (newValue, oldValue) {
                if (newValue) {
                    localStorage.setItem('LandingNewsletter:localPath', newValue);
                }
            });
        };
    }
);
