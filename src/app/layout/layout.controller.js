class LayoutCtrl {
    constructor($rootScope) {
        'ngInject';

        this.translateLoaded = false;

        $rootScope.$on('$translateChangeEnd', () =>
            this.translateLoaded = true);
    }
}

export default LayoutCtrl;
