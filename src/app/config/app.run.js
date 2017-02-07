function AppRun($rootScope, $state, $window, Auth) {
    'ngInject';

    $rootScope.$on('$viewContentLoaded', ({ targetScope }) =>
        $window.console.log(`%c DOM RENDERED:`, 'color: #0288d1', targetScope));

    $rootScope.$on('$stateChangeStart', (event, toState) =>
        $window.console.log(`%c TRANSITION BEGINS: ${toState.name}`, 'color: #827717', toState));

    $rootScope.$on('$stateChangeStart', (event, toState) => {
        if (toState.isAuthRequired && !Auth.isAuthorized()) {
            $window.console.log(`%c REDIRECT BEGINS: ${$state.current.name}`, 'color: #827717', $state.current);
            event.preventDefault();
            $state.go('app.login');
        }
    });

    $rootScope.$on('$stateChangeStart', (event, toState) => {
        if ((toState.name == 'app.login' || toState.name == 'app.register') && Auth.isAuthorized()) {
            $window.console.log(`%c REDIRECT BEGINS: ${$state.current.name}`, 'color: #827717', $state.current);
            event.preventDefault();
            $state.go('app.training');
        }
    });

    $rootScope.$on('$stateChangeSuccess', (event, toState) =>
        $window.console.log(`%c TRANSITION COMPLETED: ${toState.name}`, 'color: #33691e', toState));

    $rootScope.$on('$stateChangeError', (event, toState) =>
        $window.console.log(`%c TRANSITION FAILED: ${toState.name}`, 'color: #c62828', arguments));

    $rootScope.$on('$stateNotFound', (event, toState, fromState, fromParams) =>
        $window.console.log(`%c state ${toState.name} not found`, 'color: #ef6c00', toState, fromState, fromParams));
}

export default AppRun;
