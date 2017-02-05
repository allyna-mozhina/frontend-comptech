import angular from "angular";
import QuestionsList from "./questions-list";
import RegisterForm from "./register-form";
import LoginForm from "./login-form";
import Information from "./information";
import StateInfo from "./state-info";
import PhotoForm from "./photo-form";

const componentsModule = angular.module('app.components', []);

componentsModule.component('questionsList', QuestionsList);

componentsModule.component('registerForm', RegisterForm);

componentsModule.component('loginForm', LoginForm);

componentsModule.component('information', Information);

componentsModule.component('stateInfo', StateInfo);

componentsModule.component('photoForm', PhotoForm);

export default componentsModule;
