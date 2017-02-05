import angular from 'angular';

const componentsModule = angular.module('app.components', []);

import QuestionsList from './questions-list';
componentsModule.component('questionsList', QuestionsList);

import Information from './information';
componentsModule.component('information', Information);

export default componentsModule;
