import angular from 'angular';
import jsonDebugger from './debugger';
import heartbeatAnimationDuration from './heartbeat-animation-duration';

const directivesModule = angular.module('app.directives', []);

directivesModule.directive('debugger', jsonDebugger);
directivesModule.directive('heartbeatAnimationDuration', heartbeatAnimationDuration);

export default directivesModule;
