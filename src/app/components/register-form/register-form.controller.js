class RegisterFormCtrl {
    constructor(Registration) {
        'ngInject';

        this._Registration = Registration;
    }

    LogIn(id) {
        this._Registration.any(id)
            .then(({ data }) => this.items = data);
    }
}

export default RegisterFormCtrl;
