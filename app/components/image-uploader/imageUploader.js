define(['jquery'], function ($) {
    function imageUploader() {
        var imageUploaderController = function ($scope, $element, $attrs) {
            var vm = angular.extend(this, {});

            vm.deleteImage = deleteImage;
            vm.hoverIn = hoverIn;
            vm.hoverOut = hoverOut;

            var deleteImage = function(index) {
                vm.actualThing.images.splice(index,1);
            };

            var hoverIn = function() {
                vm.hoverEdit = true;
            };

            var hoverOut = function() {
                vm.hoverEdit = false;
            };
        };

        var linkFunction = function ($scope, $element, $attrs) {
            $element.find('.upload-input').on('change', function (event) {
                var reader = new FileReader(),
                    file = $element.find('.upload-input')[0].files[0];

                reader.addEventListener('load', function () {
                    $scope.vm.actualThing.images.push({
                        src: reader.result
                    });

                    $scope.$apply();
                }, false);

                if (file) {
                    reader.readAsDataURL(file);
                }
            });
        };

        return {
            restrict: 'E',
            scope: {
                actualThing: '='
            },
            controller: imageUploaderController,
            controllerAs: 'vm',
            link: linkFunction,
            bindToController: true,
            templateUrl: './components/image-uploader/imageUploader.html'
        };
    }

    return imageUploader;
});
