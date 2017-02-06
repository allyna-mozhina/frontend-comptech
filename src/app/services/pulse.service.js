export default class PulseService {
    constructor($http, Auth, AppConstants) {
        'ngInject';

        this._$http = $http;
        this._AppConstants = AppConstants;
        this._Auth = Auth;
    }

    get() {
        return this._$http({
            url: `${this._AppConstants.API_URL}/rest/pulse`,
            method: 'GET',
            headers: {
                'Authorization': this._AppConstants.TOKEN_TYPE + ' ' +  this._Auth.getToken()
            }
        });
    }
}
