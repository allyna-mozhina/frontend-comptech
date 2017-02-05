class LoginCtrl {
    constructor() {
        'ngInject';

        // Login Form
        this.loginFormData = {};
        this.loginFormErrors = [];
    }

    login() {
        console.log('send', this.loginFormData);
        // TODO Тут обращаемся к сервису, в промисе получаем ответ и реализуем нужную логику

        this.loginFormErrors.push('Ошибочка вышла');
        this.loginFormErrors.push('Что-то пошло не так!');
    }
}

export default LoginCtrl;