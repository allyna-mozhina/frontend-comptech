export default class Questions {
    constructor($http, AppConstants) {
        'ngInject';

        this._$http = $http;
        this._AppConstants = AppConstants;
    }

    get(id) {
        return this._$http.get(`${this._AppConstants.API_URL}/questions/${id}`);
    }

    getList() {
        return this._$http.get(`${this._AppConstants.API_URL}/questions`);
    }

    delete(id) {
        return this._$http.delete(`${this._AppConstants.API_URL}/questions/${id}`);
    }
}
