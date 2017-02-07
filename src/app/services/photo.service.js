import _ from 'lodash';

export default class PhotoService {
    constructor($http, Auth, AppConstants) {
        'ngInject';

        this._$http = $http;
        this._AppConstants = AppConstants;
        this._Auth = Auth;
    }

    get() {
        return this._$http({
            url: `${this._AppConstants.API_URL}/rest/photo`,
            method: 'GET',
            headers: {
                'Authorization': this._AppConstants.TOKEN_TYPE + ' ' +  this._Auth.getToken()
            }
        });
    }
}
