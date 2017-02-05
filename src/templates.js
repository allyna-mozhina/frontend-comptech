angular.module('templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('./components/information/information.html',
    "<div class=\"info\"><div class=\"my-info\"><div class=\"container\"></div></div><!--<p>{{'information_description' | translate}}</p>--><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>"
  );


  $templateCache.put('./components/login-form/login-form.html',
    "<div class=\"my-login-form\"><h2>Войти</h2><ul ng-show=\"$ctrl.formErrors.length\"><li ng-repeat=\"error in $ctrl.formErrors track by $index\">{{error}}</li></ul><form ng-submit=\"$ctrl.onLogin()\"><div class=\"form-group\"><input class=\"form-control\" type=\"text\" ng-model=\"$ctrl.formData.login\" id=\"loginField\" placeholder=\"e-mail\"></div><div class=\"form-group\"><input class=\"form-control\" type=\"password\" ng-model=\"$ctrl.formData.password\" id=\"passwordField\" placeholder=\"Пароль\"><div class=\"col-md-7\"><label><input type=\"checkbox\" id=\"rememberField\" ng-model=\"$ctrl.remember\" checked> Запомнить компьютер</label></div><div class=\"col-md-5 my-text-right\"><a href=\"\">Забыли пароль?</a></div></div><div class=\"form-group\"><button class=\"btn btn-danger btn-block my-login-btn\" type=\"submit\" id=\"btn__loginField\">Войти</button></div><div class=\"form-group\"><div class=\"col-md-7\"><label for=\"to__registrationField\">Нет учетной записи?</label></div><div class=\"col-md-5\"><a ng-href=\"#/register\" class=\"my-text-right\" id=\"to__registrationField\">Зарегистрироваться</a></div></div></form></div>"
  );


  $templateCache.put('./components/photo-form/photo-form.html',
    "<div class=\"my-photo-form\"><div class=\"photo-container\"><div class=\"square\"></div><img src=\"{{$ctrl.photo}}\"></div></div>"
  );


  $templateCache.put('./components/questions-list/questions-list.html',
    "<ul class=\"questionsList\"><li class=\"questionsList__item\" ng-repeat=\"question in $ctrl.items\"><a ui-sref=\"app.questionsItem({ id: question.id })\" class=\"questionsList__link\">{{question.question}}</a>&nbsp; <span class=\"questionsList__delete\" ng-click=\"$ctrl.delete(question.id)\">X</span></li></ul>"
  );


  $templateCache.put('./components/register-form/register-form.html',
    "<div class=\"registerform my-register-form\"><h2>Регистрация</h2><ul ng-show=\"$ctrl.formErrors.length\"><li ng-repeat=\"error in $ctrl.formErrors track by $index\">{{error}}</li></ul><form ng-submit=\"$ctrl.onRegister()\"><div class=\"form-group\"><input class=\"form-control\" type=\"text\" id=\"loginField\" ng-model=\"$ctrl.formData.login\" placeholder=\"e-mail\" required></div><div class=\"form-group\"><input class=\"form-control\" type=\"password\" id=\"passwordField\" ng-model=\"$ctrl.formData.password\" placeholder=\"Пароль\" required></div><div class=\"form-group\"><input class=\"form-control\" type=\"password\" id=\"passwordConfirmField\" ng-model=\"$ctrl.formData.passwordConfirm\" placeholder=\"Повторите пароль\" required></div><div class=\"form-group\"><button class=\"btn btn-danger btn-block my-register-btn\" type=\"submit\" id=\"btn_registerField\">Регистрация</button></div></form></div>"
  );


  $templateCache.put('./components/state-info/state-info.html',
    "<div class=\"my-state-form\"><div class=\"pulse\"><span>{{$ctrl.pulse}} <i class=\"fa fa-heart heart\"></i></span></div><div><!--<p>{{'training_state' | translate}}</p>--><p>Lorem ipsum</p></div></div>"
  );


  $templateCache.put('./dashboard/dashboard.html',
    "<div class=\"dashboard\"><div class=\"row\" style=\"margin-top: -40px\"><border-panel><div class=\"row\"><div class=\"border-header\">{{'system_dashboard_show_events' | translate}}</div></div></border-panel></div><div class=\"row\" style=\"margin-top: 20px\"><div class=\"row\"><div class=\"col-sm-2\"><div class=\"border\" style=\"height: 75vh\"><p>{{'system_dashboard_average' |translate |lowercase}}</p></div></div><div class=\"col-sm-10\"><div class=\"row\"><div class=\"col-sm-8\"><div class=\"border\" style=\"height: 40vh\"><p>{{'system_dashboard_current_situation' |translate |lowercase}}</p></div></div><div class=\"col-sm-4\"><div class=\"border\" style=\"height: 40vh\"><p>{{'system_dashboard_notifications' |translate |lowercase}}</p><div style=\"position: absolute; bottom: 10px; left: 0; text-align: center; width: 100%\"><a>{{'system_dashboard_want_more_notifications' |translate |lowercase}}</a></div></div></div></div></div><div class=\"col-sm-10\"><div style=\"height: 35vh; position: relative\"><div style=\"position: absolute; bottom: 0; width: 100%\"><div class=\"row\"><div class=\"col-sm-3\">{{'system_dashboard_rule_top' |translate}}</div><div class=\"col-sm-3\">{{'system_dashboard_rule_offenders' |translate}}</div><div class=\"col-sm-3\">{{'system_dashboard_category_top' |translate}}</div><div class=\"col-sm-3\">{{'system_dashboard_address_top' |translate}}</div></div></div></div></div></div></div></div>"
  );


  $templateCache.put('./index.html',
    "<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Comptech2017</title><link rel=\"icon\" type=\"image/png\" href=\"favicon.png\"></head><body><div ui-view></div><link rel=\"stylesheet\" href=\"./css/libs.css\"><link rel=\"stylesheet\" href=\"./css/app.css\"><!--<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">--><script src=\"./js/libs.js\"></script><script src=\"./js/app.js\"></script></body></html>"
  );


  $templateCache.put('./layout/layout.html',
    "<div class=\"layout\"><nav class=\"navbar navbar-default\"><div class=\"container-fluid\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\">СЕРВИС</a></div><div class=\"navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav navbar-right\"><li><button type=\"button\" class=\"btn btn-default navbar-btn\">Выход</button></li></ul></div><!-- /.navbar-collapse --></div><!-- /.container-fluid --></nav><div ui-view></div></div>"
  );


  $templateCache.put('./login/login.html',
    "<div class=\"row\"><div class=\"col-md-6\"><information></information></div><div class=\"col-md-6\"><login-form on-login=\"$ctrl.login()\" form-data=\"$ctrl.loginFormData\" form-errors=\"$ctrl.loginFormErrors\"></login-form></div></div>"
  );


  $templateCache.put('./questions/question.html',
    "<div class=\"question\"><h2>{{$ctrl.question.question}}</h2><a ui-sref=\"app.questions\" class=\"question__link\">Questions list</a><ul class=\"question__choices\"><li class=\"question__choicesItem\" ng-repeat=\"choice in $ctrl.question.choices\">{{choice.choice}}: {{choice.votes}} votes</li></ul><debugger model=\"$ctrl.questions\"></debugger></div>"
  );


  $templateCache.put('./questions/questions.html',
    "<div class=\"questions\"><h2>Questions</h2><questions-list items=\"$ctrl.questions\"></questions-list><!--<login-form on-login=\"$ctrl.login()\" form-data=\"$ctrl.loginFormData\" form-errors=\"$ctrl.loginFormErrors\"></login-form>--><debugger model=\"$ctrl.questions\"></debugger></div>"
  );


  $templateCache.put('./register/register.html',
    "<div class=\"row\"><div class=\"col-md-6\"><information></information></div><div class=\"col-md-6\"><register-form on-register=\"$ctrl.register()\" form-data=\"$ctrl.registerFormData\" form-errors=\"$ctrl.registerFormErrors\"></register-form></div></div>"
  );


  $templateCache.put('./training/training.html',
    "<div class=\"row\"><div class=\"col-md-6\"><photo-form photo=\"$ctrl.photo\"></photo-form></div><div class=\"col-md-6\"><state-info pulse=\"$ctrl.pulse\"></state-info></div></div>"
  );

}]);
