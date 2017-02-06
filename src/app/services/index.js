import angular from 'angular';

import QuestionsService from './questions.service';
import AuthService from './authentication.service';
import FacesService from './faces.service';
import PulseService from './pulse.service';

const servicesModule = angular.module('app.services', []);

servicesModule.service('Questions', QuestionsService);
servicesModule.service('Auth', AuthService);
servicesModule.service('Faces', FacesService);
servicesModule.service('Pulse', PulseService);

export default servicesModule;
