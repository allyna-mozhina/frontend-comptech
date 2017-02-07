class TrainingCtrl {
    constructor($interval, $scope, Pulse, info, Photo, photo) {
        'ngInject';

        this._$interval = $interval;
        this._Pulse = Pulse;

        this.isTraining = this._stateToBool(info.state);
        this.pulse = info.pulse;
        this.photo = "data:image/jpeg;base64," + photo.photo;
        this.coordinates = photo.coordinates;

        this.timer = this.setTimer();
        $scope.$on('$destroy', () => $interval.cancel(this.timer));

    };

    _stateToBool(state) {
        return state == 'yes';
    }

    setTimer() {
        const self = this;

        return this._$interval(function () {
            return self._Pulse.get().then(
                ({data}) => {
                    self.isTraining = self._stateToBool(data.state);
                    self.pulse = data.pulse
                },
                (error) => console.log(error)
            );
        }, 1000);
    }


}

export default TrainingCtrl;
