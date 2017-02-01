function QuestionsConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.questions', {
            url: '/questions',
            templateUrl: './questions/questions.html',
            controller: 'QuestionsCtrl',
            controllerAs: '$ctrl',
            resolve: {
                questions(Questions, $state) {
                    'ngInject';

                    return Questions.getList().then(
                        ({ data }) => data,
                        (error) => $state.go('app.404')
                    );
                }
            }
        })
        .state('app.questionsItem', {
            url: '/questions/:id',
            templateUrl: './questions/question.html',
            controller: 'QuestionCtrl',
            controllerAs: '$ctrl',
            resolve: {
                question(Questions, $state, $stateParams) {
                    'ngInject';

                    return Questions.get($stateParams.id).then(
                        ({ data }) => data,
                        (error) => $state.go('app.questions')
                    );
                }
            }
        });
}

export default QuestionsConfig;
