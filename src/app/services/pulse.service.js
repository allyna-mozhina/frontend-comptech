import _ from 'lodash';

export default class PulseService {
    constructor($http, Auth, AppConstants) {
        'ngInject';

        this._$http = $http;
        this._AppConstants = AppConstants;
        this._Auth = Auth;
    }

    get() {
        //return new Promise((resolve) => { resolve({data:{ state: 'no', pulse: _.random(60, 120) }})});
        return this._$http({
            url: `${this._AppConstants.API_URL}/rest/pulse`,
            method: 'GET',
            headers: {
                'Authorization': this._AppConstants.TOKEN_TYPE + ' ' +  this._Auth.getToken()
            }
        });
    }
}
