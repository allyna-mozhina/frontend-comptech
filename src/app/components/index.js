import angular from 'angular';

const componentsModule = angular.module('app.components', []);

import QuestionsList from './questions-list';
componentsModule.component('questionsList', QuestionsList);

import LoginForm from './login-form';
componentsModule.component('loginForm', LoginForm);

export default componentsModule;
