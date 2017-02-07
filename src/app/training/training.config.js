function TrainingConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.training', {
            url: '/training',
            templateUrl: './training/training.html',
            controller: 'TrainingCtrl',
            controllerAs: '$ctrl',
            isAuthRequired: false, //TODO change to true
            resolve: {
                info(Pulse, $state) {
                    'ngInject';

                    return Pulse.get().then(
                        ({data}) => data,
                        (error) => $state.go('app.404')
                    );
                }
            }
        });
}

export default TrainingConfig;
