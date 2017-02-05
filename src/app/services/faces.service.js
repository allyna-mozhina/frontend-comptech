export default class FacesService {
    constructor($http, AppConstants) {
        'ngInject';

        this._$http = $http;
        this._AppConstants = AppConstants;
    }

    get() {
        return this._$http.get(`${this._AppConstants.API_URL}/faces`);
    }

}