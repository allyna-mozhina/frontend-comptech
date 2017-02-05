import angular from 'angular';

// Configs
import appConfig from './config/app.config';
import appConstants from './config/app.constants';
import appRun from './config/app.run';

// Libs
import 'jquery';
import 'angular-ui-router';
import 'lodash';

// Modules & dependencies
import '../templates';
import './layout';
import './questions';
import './register';
import './components';
import './services';
import './directives';

const requires = [
    'ui.router',
    'templates',
    'app.layout',
    'app.questions',
    'app.register',
    'app.components',
    'app.services',
    'app.directives'
];

angular.module('app', requires);
angular.module('app').constant('AppConstants', appConstants);
angular.module('app').config(appConfig);
angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], { strictDi: true });
