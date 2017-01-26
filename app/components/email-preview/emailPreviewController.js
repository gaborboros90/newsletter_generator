define(
    [
        'angular'
    ],
    function (angular) {
        'use strict';

        return function emailPreviewController($scope) {
            var vm = this;

            vm.getLinkText = getLinkText;

            function getLinkText(href) {
                var urlParts;

                if(typeof href === 'string') {
                    urlParts = href.split('/');

                    return urlParts[urlParts.length - 1] + ': ';
                }
            }
        };
    }
);
