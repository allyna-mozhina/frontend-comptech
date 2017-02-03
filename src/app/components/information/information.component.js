import InformationCtrl from './information.controller';

export default {
    bindings: {
        texts: '='
    },
    templateUrl: './components/information/information.html',
    controller: InformationCtrl,
    controllerAs: '$ctrl'
};
