import angular from 'angular';
import DashboardConfig from './dashboard.config';
import DashboardCtrl from './dashboard.controller';

const dashboardModule = angular.module('app.dashboard', []);
dashboardModule.config(DashboardConfig);
dashboardModule.controller('DashboardCtrl', DashboardCtrl);

export default dashboardModule;
