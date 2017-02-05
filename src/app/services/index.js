import angular from 'angular';

import QuestionsService from './questions.service';

const servicesModule = angular.module('app.services', []);

servicesModule.service('Questions', QuestionsService);

import PulseService from './pulse.service';

servicesModule.service('Pulse', PulseService);


export default servicesModule;
