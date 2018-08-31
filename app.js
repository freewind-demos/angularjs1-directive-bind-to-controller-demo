const app = angular.module('app', [])

app.controller('myController', function ($scope) {
    $scope.userName = 'AngularJs'
})

app.directive('helloTo', function () {
    return {
        restrict: 'A',
        template: '<div>' +
            '   Hello, {{ vm.userName }}' +
            '   <button ng-click="vm.toUpper()">To Upper Case</button>' +
            '</div>',
        scope: true,
        controller: function () {
            const vm = this
            vm.toUpper = function () {
                vm.userName = vm.userName.toUpperCase()
            }
        },
        controllerAs: 'vm',
        bindToController: {
            userName: '=helloTo'
        }
    }
})