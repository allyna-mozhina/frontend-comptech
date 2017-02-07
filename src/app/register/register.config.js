function RegisterConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.register', {
            url: '/register',
            templateUrl: './register/register.html',
            controller: 'RegisterCtrl',
            controllerAs: '$ctrl',
            isAuthRequired: false,
            resolve: {}
        });
}

export default RegisterConfig;