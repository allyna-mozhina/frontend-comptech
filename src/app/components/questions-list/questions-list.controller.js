class QuestionsListCtrl {
    constructor(Questions) {
        'ngInject';

        this._Questions = Questions;
    }

    delete(id) {
        this._Questions.delete(id)
            .then(({ data }) => this.items = data);
    }
}

export default QuestionsListCtrl;
