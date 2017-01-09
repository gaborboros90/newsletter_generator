require.config({
    baseUrl: '',
    paths: {
        'app-module': 'app-module',
        'jquery': './assets/libs/jquery/dist/jquery',
        'bootstrap': './assets/libs/bootstrap/bootstrap.min',
        '_': './assets/libs/lodash/lodash',
        'angular': './assets/libs/angular/angular'
    },
    shim: {
        'angular': {'exports' : 'angular'},
        'jquery': {'exports': 'jquery'},
        'bootstrap' : { 'deps' :['jquery'] }
    },
    priority: ['angular'],
    deps: ['app-module']
});

require([
        'angular',
        './app-module'
    ], function(angular, appModule) {
        angular.bootstrap(document.querySelector('body'), [appModule]);
    }
);