(function (window) {
    'use strict';

    function FooController($scope) {
        var delay = 2000,
            controller = this;

        $scope.model = this.model = {};

        window.setTimeout(function () {
            $scope.$apply(function () {
                controller.model.name = 'a new scope mode name value';
            });
        }, delay);

        $scope.changeValue = function () {
            var newValue = 'setName call ' + new Date();
//            controller.setName(newValue);
            FooController.changeValue($scope, newValue);
        };
    }

    FooController.prototype.getName = function () {
        return this.model.name;
    };

    FooController.prototype.setName = function (name) {
        this.model.name = name;
    };

    FooController.changeValue = function ($scope, value) {
        $scope.model.name = value;
    };
    window.FooController = FooController;
}(window));