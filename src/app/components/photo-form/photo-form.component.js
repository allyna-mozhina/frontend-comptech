import PhotoFormCtrl from './photo-form.controller';

export default {
    bindings: {
        pulse: '=',
        photo: '=',
        coordinates: '=',
    },
    templateUrl: './components/photo-form/photo-form.html',
    controller: PhotoFormCtrl,
    controllerAs: '$ctrl'
};
