class PhotoFormCtrl {
    constructor($scope) {
        'ngInject';

        $scope.top = this.coordinates.topLeft.x + "px";
        $scope.left = this.coordinates.topLeft.y + "px";
        $scope.right = this.coordinates.bottomRight.x + "px";
        $scope.bottom = this.coordinates.bottomRight.y + "px";


    };
}

export default PhotoFormCtrl;
