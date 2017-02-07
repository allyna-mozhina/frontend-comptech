function LoginConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.login', {
            url: '/login',
            templateUrl: './login/login.html',
            controller: 'LoginCtrl',
            controllerAs: '$ctrl',
            isAuthRequired: false,
            resolve: {}
        });
}

export default LoginConfig;
