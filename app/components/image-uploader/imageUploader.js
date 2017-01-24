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
            $element.find('input').on('change', function (event) {
                var files = $element.find('input')[0].files;

                function readAndPreview(file) {
                    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
                        var reader = new FileReader();

                        reader.addEventListener('load', function () {
                            $scope.vm.actualThing.images.push({
                                src: this.result
                            });

                            $scope.$apply();
                        }, false);

                        reader.readAsDataURL(file);
                    }
                }

                if (files) {
                    [].forEach.call(files, readAndPreview);
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
