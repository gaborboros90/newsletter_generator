define(['jquery'], function ($) {
    function imageUploader() {
        var imageUploaderController = function($scope, $element, $attrs) {
            var vm = angular.extend(this, {});

            vm.valami = 'asdasda';
        };

        return {
            restrict: 'E',
            scope: {
                actualThing: '='
            },
            controller: imageUploaderController,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: './components/image-uploader/imageUploader.html'
        };
    }

    return imageUploader;
});
