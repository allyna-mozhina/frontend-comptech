import angular from 'angular';
import QuestionsService from './questions.service';
import AuthenticationService from './authentication.service';

const servicesModule = angular.module('app.services', []);

servicesModule.service('Questions', QuestionsService);
servicesModule.service('AuthenticationService', AuthenticationService);

export default servicesModule;
