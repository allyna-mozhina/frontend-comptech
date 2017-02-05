class QuestionsCtrl {
    constructor(questions) {
        'ngInject';

        this.questions = questions;
    }

    login(formInfo, remember) {
        alert(formInfo.login);
    }
}

export default QuestionsCtrl;
