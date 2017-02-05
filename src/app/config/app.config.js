function AppConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('app', {
            abstract: true,
            templateUrl: './layout/layout.html',
            controller: 'LayoutCtrl'
        });

    $urlRouterProvider.otherwise('/login');
}

export default AppConfig;
