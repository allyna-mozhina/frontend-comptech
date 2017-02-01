import QuestionsListCtrl from './questions-list.controller';

export default {
    bindings: {
        items: '='
    },
    templateUrl: './components/questions-list/questions-list.html',
    controller: QuestionsListCtrl,
    controllerAs: '$ctrl'
};
