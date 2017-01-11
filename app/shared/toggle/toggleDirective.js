define(['jquery'], function ($) {
    function toggleDirective() {
        function link($scope, $element, $attrs) {
            $element.find('.group-header').on('click', function(event) {
                $(this).siblings().toggle();
            });
        }

        return {
            link: link,
            restrict: 'EA'
        };
    }

    return toggleDirective;
});
