import angular from "angular";
import RegisterConfig from "./register.config";
import RegisterCtrl from "./register.controller";

const registernModule = angular.module('app.register', []);
registreModule.config(RegisterConfig);
registerModule.controller('RegisterCtrl', RegisterCtrl);

export default registerModule;