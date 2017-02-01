import angular from 'angular';

const componentsModule = angular.module('app.components', []);

import QuestionsList from './questions-list';
componentsModule.component('questionsList', QuestionsList);

export default componentsModule;
