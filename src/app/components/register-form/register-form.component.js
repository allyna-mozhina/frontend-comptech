import RegisterFormCtrl from './register-form.controller';

export default {
    bindings: {
        formData: '=',
        formErrors: '=',
        onRegister: '&'
    },
    templateUrl: './components/register-form/register-form.html',
    controller: RegisterFormCtrl,
    controllerAs: '$ctrl'
};