class LayoutCtrl {
    constructor($rootScope, $state, Auth) {
        'ngInject';

        $rootScope._AuthService = Auth;
        $rootScope.isAuthorized = () => {return $rootScope._AuthService.isAuthorized();};
        $rootScope.quit = () => {
            $rootScope._AuthService.logout();
            $state.go('app.login');
        };

        this.translateLoaded = false;


        $rootScope.$on('$translateChangeEnd', () =>
            this.translateLoaded = true);
    }

}

export default LayoutCtrl;
