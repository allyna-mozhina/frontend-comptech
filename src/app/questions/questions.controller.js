class QuestionsCtrl {
    constructor(questions) {
        'ngInject';

        this.questions = questions;
    }

    login(loginInfo) {
        alert(loginInfo);
    }
}

export default QuestionsCtrl;
