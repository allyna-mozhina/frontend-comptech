function AppConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('app', {
            abstract: true,
            templateUrl: './layout/layout.html',
            controller: 'LayoutCtrl'
        });

    $urlRouterProvider.otherwise('/questions'); //TODO: Change to mainpage or smtnhg
}

export default AppConfig;
