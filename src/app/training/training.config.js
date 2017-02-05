function TrainingConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.training', {
            url: '/training',
            templateUrl: './training/training.html',
            controller: 'TrainingCtrl',
            controllerAs: '$ctrl',
            resolve: {}
        });
}

export default TrainingConfig;
