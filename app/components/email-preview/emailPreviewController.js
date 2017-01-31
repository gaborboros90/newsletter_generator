define(
    [
        'angular'
    ],
    function (angular) {
        'use strict';

        return function emailPreviewController($scope) {
            var vm = this;

            vm.getLinkText = getLinkText;
            vm.getFirstVisibleResolutionIndex = getFirstVisibleResolutionIndex;

            function getLinkText(href) {
                var urlParts;

                if (typeof href === 'string') {
                    urlParts = href.split('/');

                    return urlParts[urlParts.length - 1];
                }
            }

            function getFirstVisibleResolutionIndex(resolutionList) {
                var index = -1;

                for (var i = 0; i < resolutionList.length; i++) {
                    if(resolutionList[i].closedBugs > 0 || resolutionList[i].raisedBugs) {
                        index = i;

                        break;
                    }
                }

                return index;
            }
        };
    }
);
