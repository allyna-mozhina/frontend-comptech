function TrainingConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.training', {
            url: '/training',
            templateUrl: './training/training.html',
            controller: 'TrainingCtrl',
            controllerAs: '$ctrl',
            isAuthRequired: true,
            resolve: {
                info(Pulse, $state) {
                    'ngInject';

                    return Pulse.get().then(
                        ({data}) => data,
                        (error) => console.log(error)
                    );
                },
                photo(Photo, $state) {
                    'ngInject';

                    return Photo.get().then(
                        ({data}) => data,
                        (error) => console.log(error)
                    );
                }
            }
        });
}

export default TrainingConfig;
