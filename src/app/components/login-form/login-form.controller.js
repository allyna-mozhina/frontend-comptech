class LoginFormCtrl {
	constructor() {
	    'ngInject';

        this.form = {};
    }

    submit() {
        this.onLogin(this.form, this.remember);
    }
}

export default LoginFormCtrl;  