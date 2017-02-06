class LayoutCtrl {
    constructor($rootScope, Auth) {
        'ngInject';

        $rootScope._AuthService = Auth;
        $rootScope.isAuthorized = () => {return $rootScope._AuthService.isAuthorized();};

        this.translateLoaded = false;


        $rootScope.$on('$translateChangeEnd', () =>
            this.translateLoaded = true);
    }

}

export default LayoutCtrl;
