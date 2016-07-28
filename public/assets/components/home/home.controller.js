(function () {
  // public/components/home/home.controller.js
  angular.module('processTracker')
         .controller('HomeController', HomeController)

  HomeController.$inject = ['$scope']

  function HomeController ($scope) {
    $scope.people = ['herp', 'derp']
  }
})()
