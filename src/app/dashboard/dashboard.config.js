function DashboardConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.dashboard', {
            url: '/dashboard',
            controller: 'DashboardCtrl',
            controllerAs: '$ctrl',
            templateUrl: './dashboard/dashboard.html'
        });
}

export default DashboardConfig;
