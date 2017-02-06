import angular from "angular";
import TrainingConfig from "./training.config";
import TrainingCtrl from "./training.controller";

const trainingModule = angular.module('app.training', []);
trainingModule.config(TrainingConfig);
trainingModule.controller('TrainingCtrl', TrainingCtrl);

export default trainingModule;
