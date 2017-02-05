class RegisterCtrl {
    constructor() {
        'ngInject';

        // Login Form
        this.registerFormData = {};
        this.registerFormErrors = [];
    }
    
    register() {
        console.log('send', this.registerFormData);
        // TODO Тут обращаемся к сервису, в промисе получаем ответ и реализуем нужную логику
        this.registerFormErrors.push('Ошибочка вышла');
        this.registerFormErrors.push('Что-то пошло не так!');
    }
}

export default RegisterCtrl;