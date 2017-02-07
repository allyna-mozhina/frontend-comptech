import StateInfoCtrl from './state-info.controller';

export default {
    bindings: {
        pulse: '=',
        isTraining: '='
    },
    templateUrl: './components/state-info/state-info.html',
    controller: StateInfoCtrl,
    controllerAs: '$ctrl'
};
