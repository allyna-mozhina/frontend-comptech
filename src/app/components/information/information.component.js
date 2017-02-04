import InformationCtrl from './information.controller';

export default {
    bindings: {
        text: '=',
        pictureURL:'='
    },
    templateUrl: './components/information/information.html',
    controller: InformationCtrl,
    controllerAs: '$ctrl'
};
