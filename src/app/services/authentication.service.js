export default class AuthService {
    constructor($http, $httpParamSerializerJQLike, AppConstants) {
        'ngInject';

        this._$http = $http;
        this._$httpParamSerializerJQLike = $httpParamSerializerJQLike;
        this._AppConstants = AppConstants;
    }

    register(formData) {
        return this._$http.post(`${this._AppConstants.API_URL}/connect/register`, formData);
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
        return sessionStorage.getItem(this._AppConstants.TOKEN_KEY)
            || localStorage.getItem(this._AppConstants.TOKEN_KEY);
    }

    setToken(token, remember) {
        if (remember)
            localStorage.setItem(this._AppConstants.TOKEN_KEY, token);
        else
            sessionStorage.setItem(this._AppConstants.TOKEN_KEY, token);
    }

    logout() {
        localStorage.removeItem(this._AppConstants.TOKEN_KEY);
        sessionStorage.removeItem(this._AppConstants.TOKEN_KEY);
    }
}