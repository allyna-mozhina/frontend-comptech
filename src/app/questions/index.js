import angular from 'angular';
import QuestionsConfig from './questions.config';
import QuestionCtrl from './question.controller';
import QuestionsCtrl from './questions.controller';

const questionsModule = angular.module('app.questions', []);
questionsModule.config(QuestionsConfig);
questionsModule.controller('QuestionCtrl', QuestionCtrl);
questionsModule.controller('QuestionsCtrl', QuestionsCtrl);

export default questionsModule;
