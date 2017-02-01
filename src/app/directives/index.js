import angular from 'angular';
import jsonDebugger from './debugger';

const directivesModule = angular.module('app.directives', []);

directivesModule.directive('debugger', jsonDebugger);

export default directivesModule;
