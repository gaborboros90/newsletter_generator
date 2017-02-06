define(['jquery'], function ($) {
    function imageUploader() {
        var imageUploaderController = function ($scope, $element, $attrs) {
            var vm = this;

            vm.deleteImage = deleteImage;

            function deleteImage(index) {
                vm.images.splice(index, 1);
            }
        };

        var linkFunction = function ($scope, $element, $attrs) {
            $element.find('input').on('change', function (event) {
                var files = $element.find('input')[0].files;

                function readAndPreview(file) {
                    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
                        var reader = new FileReader();

                        reader.addEventListener('load', function () {
                            $scope.vm.images.push({
                                src: this.result
                            });

                            $scope.$apply();
                        }, false);

                        $(this).val('');
                        reader.readAsDataURL(file);
                    }
                }

                if (files) {
                    [].forEach.call(files, $.proxy(readAndPreview, this));
                }
            });
        };

        return {
            restrict: 'E',
            scope: {
                images: '='
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
