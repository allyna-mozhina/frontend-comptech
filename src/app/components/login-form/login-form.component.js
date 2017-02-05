import LoginFormCtrl from './login-form.controller';

export default {
    bindings: {
        login: '=',
		password: '=',
        remember: '=',
        onlogin: '&'
    },
	templateUrl: './components/login-form/login-form.html',
    controller: LoginFormCtrl,
    controllerAs: '$ctrl'
};
