import LoginFormCtrl from './login-form.controller';

export default {
    bindings: {
        onLogin: '&'
    },
	templateUrl: './components/login-form/login-form.html',
    controller: LoginFormCtrl,
    controllerAs: '$ctrl'
};
