import angular from 'angular';

import QuestionsService from './questions.service';

import FacesService from './faces.service';

import PulseService from './pulse.service';

import AuthService from './authentication.service';

const servicesModule = angular.module('app.services', []);

servicesModule.service('Questions', QuestionsService);

servicesModule.service('Faces', FacesService);

servicesModule.service('Pulse', PulseService);

servicesModule.service('Auth', AuthService);

export default servicesModule;
