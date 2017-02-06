import PhotoFormCtrl from './photo-form.controller';

export default {
    bindings: {
        pulse: '=',
        photo: '='
    },
    templateUrl: './components/photo-form/photo-form.html',
    controller: PhotoFormCtrl,
    controllerAs: '$ctrl'
};
