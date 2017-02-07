import _ from 'lodash';

class RegisterCtrl {
    constructor($state, Auth, AppConstants) {
        'ngInject';

        this._$state = $state;
        this._Auth = Auth;
        this._AppConstants = AppConstants;

        // Login Form
        this.registerFormData = {};
        this.registerFormErrors = [];
    }
    
    register() {
        this.registerFormData['grant_type'] = this._AppConstants.GRANT_TYPE;
        this.registerFormData['username'] = this.registerFormData.userName;

        const REG_FIELDS = ['userName', 'password'];
        const regData = _.pick(this.registerFormData, REG_FIELDS);

        const AUTH_FIELDS = ['username', 'password', 'grant_type'];
        const authData = _.pick(this.registerFormData, AUTH_FIELDS);

        console.log('send', regData);

        return this._Auth.register(regData)
            .then(
                () => this._Auth.login(authData),
                (error) => this.registerFormErrors.push(error))
            .then(
                (resp) => {
                    this._Auth.setToken(resp.data['access_token'], false);
                    this._$state.go('app.training')
                },
                (error) => this.registerFormErrors.push(error)
            );
    }
}

export default RegisterCtrl;