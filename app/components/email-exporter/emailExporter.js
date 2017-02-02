define(['jquery'], function ($) {
    function emailExporter() {
        var linkFunction = function ($scope, $element, $attrs) {
            var vm = $scope.vm;

            vm.exportToHTML = function () {
                var htmlPreTags = '<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"' + 'xmlns:w="urn:schemas-microsoft-com:office:word" xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"' + 'xmlns:mv="http://macVmlSchemaUri" xmlns="http://www.w3.org/TR/REC-html40"><head>',
                    htmlPostTags = '</body></html>',
                    anchorElement = document.createElement('a'),
                    data = '',
                    blob = null,
                    url = '';

                $scope.vm.model.assets.path = $scope.vm.model.assets.localPath;

                setTimeout(function() {
                    data = htmlPreTags + $('.email-preview-container')[0].innerHTML + htmlPostTags;
                    blob = new Blob([data], {type: 'octet/stream'});
                    url = window.URL.createObjectURL(blob);

                    document.body.appendChild(anchorElement);
                    anchorElement.style.display = 'none';


                    anchorElement.href = url;
                    anchorElement.download = 'landing-newsletter.html';
                    anchorElement.click();
                    window.URL.revokeObjectURL(url);


                    $scope.vm.model.assets.path = $scope.vm.model.assets.remotePath;
                    $scope.$digest();
                }, 0);
            };
        };

        return {
            restrict: 'E',
            controllerAs: 'vm',
            scope: false,
            link: linkFunction,
            templateUrl: './components/email-exporter/emailExporter.html'
        };
    }

    return emailExporter;
});
