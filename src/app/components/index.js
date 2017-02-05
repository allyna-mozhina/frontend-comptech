import angular from 'angular';

const componentsModule = angular.module('app.components', []);

import QuestionsList from './questions-list';
componentsModule.component('questionsList', QuestionsList);

import LoginForm from './login-form';
componentsModule.component('loginForm', LoginForm);

import Information from './information';
componentsModule.component('information', Information);

import StateInfo from './state-info';
componentsModule.component('stateInfo', StateInfo);

export default componentsModule;