class TrainingCtrl {
    constructor($interval, $scope, Pulse, info) {
        'ngInject';

        this._$interval = $interval;
        this._Pulse = Pulse;

        this.isTraining = this._stateToBool(info.state);
        this.pulse = info.pulse;

        this.timer = this.setTimer();
        $scope.$on('$destroy', () => $interval.cancel(this.timer));

        this.photo = "http://gorabbit.ru/upload/uploader/23d/23dae1e5c7c29744e0a22766a13b170a.jpeg";
    };

    _stateToBool(state) {
        return state == 'yes';
    }

    setTimer() {
        const self = this;

        return this._$interval(function() {
            return self._Pulse.get().then(
                ({data}) => {
                    self.isTraining = self._stateToBool(data.state);
                    self.pulse = data.pulse
                },
                (error) => $state.go('app.404')
            );
        }, 1000);
    }


}

export default TrainingCtrl;
