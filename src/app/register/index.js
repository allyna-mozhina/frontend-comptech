import angular from 'angular';
import RegisterConfig from './register.config';
import RegisterCtrl from './register.controller';

const registerModule = angular.module('app.register', []);
registerModule.config(RegisterConfig);
registerModule.controller('RegisterCtrl', RegisterCtrl);

export default registerModule;