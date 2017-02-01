import angular from 'angular';

import QuestionsService from './questions.service';

const servicesModule = angular.module('app.services', []);

servicesModule.service('Questions', QuestionsService);

export default servicesModule;
