import _ from 'lodash';

class LoginCtrl {
    constructor(Auth, AppConstants) {
        'ngInject';

        this._Auth = Auth;
        this._AppConstants = AppConstants;

        // Login Form
        this.loginFormData = {};
        this.loginFormErrors = [];
    }

    login() {
        this.loginFormData['grant_type'] = this._AppConstants.GRANT_TYPE;

        const AUTH_FIELDS = ['login', 'password', 'grant_type'];
        const postData = _.pick(this.loginFormData, AUTH_FIELDS);

        console.log('send', postData);

        return this._Auth.login(postData).then(
            ({ data }) =>  {
                this._Auth.setToken(data['access_token'], this.loginFormData.remember);
            },
            (error) => this.loginFormErrors.push(error));
    }
}

export default LoginCtrl;