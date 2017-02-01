import angular from 'angular';
import LayoutCtrl from './layout.controller';

const layoutModule = angular.module('app.layout', []);
layoutModule.controller('LayoutCtrl', LayoutCtrl);

export default layoutModule;
