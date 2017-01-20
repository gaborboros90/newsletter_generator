define(['jquery'], function ($) {
    function imageUploader() {
        var imageUploaderController = function ($scope, $element, $attrs) {
            var vm = this;

            vm.deleteImage = deleteImage;

            function deleteImage(index) {
                vm.actualThing.images.splice(index, 1);
            }
        };

        var linkFunction = function ($scope, $element, $attrs) {
            $element.find('.upload-input').on('change', function (event) {
                var reader = new FileReader(),
                    file = $element.find('.upload-input')[0].files[0];

                reader.addEventListener('loadend', function () {
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
