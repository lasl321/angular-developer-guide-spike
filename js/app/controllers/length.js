(function (window) {
    'use strict';

    function LengthController($scope) {
        var names = [];

        $scope.model = {names: names};

        $scope.addName = function () {
            names.push((new Date()).toTimeString());
        };

        $scope.getCurrentLength = function () {
            return names.length;
        };
    }

    window.LengthController = LengthController;
}(window));