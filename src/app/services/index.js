import angular from 'angular';

import QuestionsService from './questions.service';

import FacessService from './faces.service';

const servicesModule = angular.module('app.services', []);

servicesModule.service('Questions', QuestionsService);

servicesModule.service('Faces', FacesService);

export default servicesModule;
