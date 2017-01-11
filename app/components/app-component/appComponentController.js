define(
    [
        'angular'
    ],
    function (angular) {
        'use strict';

        return function releaseBoardController($scope) {
            var vm = this;

            this.headerText = 'App Component';

            this.model = {
                highlight: {
                    features: {
                        title: 'Bigger features',
                        list: ['']
                    },
                    mvts: {
                        title: 'New MVT-s',
                        list: ['']
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
    }
);
