import angular from 'angular';

const componentsModule = angular.module('app.components', []);

import QuestionsList from './questions-list';
import LoginForm from './login-form';

componentsModule.component('questionsList', QuestionsList);
componentsModule.component('loginForm', LoginForm);

export default componentsModule;
