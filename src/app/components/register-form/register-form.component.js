import RegisterFormCtrl from './register-form.controller';

export default {
    bindings: {
        login: '=',
        password: '=',
        passwordConfirm: '=',
        onRegister: '&'
    },
    templateUrl: './components/register-form/register-form.html',
    controller: RegisterFormCtrl,
    controllerAs: '$ctrl'
};