define(['jquery'], function ($) {
    function emailExporter() {
        var linkFunction = function ($scope, $element, $attrs) {
            var vm = $scope.vm;

            vm.exportToHTML = function () {
                var htmlPreTags = '<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"' + 'xmlns:w="urn:schemas-microsoft-com:office:word" xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"' + 'xmlns:mv="http://macVmlSchemaUri" xmlns="http://www.w3.org/TR/REC-html40"><head>',
                    htmlPostTags = '</body></html>',
                    data = htmlPreTags + $('.email-preview-container')[0].innerHTML + htmlPostTags,
                    blob = new Blob([data], {type: 'octet/stream'}),
                    url = window.URL.createObjectURL(blob),
                    anchorElement = document.createElement('a');

                document.body.appendChild(anchorElement);
                anchorElement.style.display = 'none';


                anchorElement.href = url;
                anchorElement.download = 'landing-newsletter.html';
                anchorElement.click();
                window.URL.revokeObjectURL(url);
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
