import angular from "angular";
import LoginConfig from "./login.config";
import LoginCtrl from "./login.controller";

const loginModule = angular.module('app.login', []);
loginModule.config(LoginConfig);
loginModule.controller('LoginCtrl', LoginCtrl);

export default loginModule;
