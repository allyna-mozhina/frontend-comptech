export default class AuthService {
    constructor($http, $httpParamSerializerJQLike, AppConstants) {
        'ngInject';

        this._$http = $http;
        this._$httpParamSerializerJQLike = $httpParamSerializerJQLike;
        this._AppConstants = AppConstants;
    }

    register(formData) {

    }

    login(formData) {
        return this._$http({
            url: `${this._AppConstants.API_URL}/connect/token`,
            method: 'POST',
            data: this._$httpParamSerializerJQLike(formData),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }

    isAuthorized() {
        return Boolean(this.getToken());
    }

    getToken() {
        return sessionStorage.getItem(this._AppConstants.TOKEN_KEY);
    }

    remember(token) {
        sessionStorage.setItem(this._AppConstants.TOKEN_KEY, token);
    }

    logout() {
        sessionStorage.removeItem(this._AppConstants.TOKEN_KEY);
    }
}