import angular from 'angular';

const componentsModule = angular.module('app.components', []);

import QuestionsList from './questions-list';
componentsModule.component('questionsList', QuestionsList);

import RegisterForm from './register-form';
componentsModule.component('registerForm', RegisterForm);

export default componentsModule;
