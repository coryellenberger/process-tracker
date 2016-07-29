(function () {
  // public/app.routes.js
  angular.module('processTracker')
         .config(RouteConfig)

  RouteConfig.$inject = ['$routeProvider', '$locationProvider']

  function RouteConfig ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix()

    $routeProvider

      .when('/', {
        templateUrl: 'assets/components/home/home.view.html',
        controller: 'HomeController'
      })

      .when('/myprocess', {
        templateUrl: 'assets/components/my-process/my-process.view.html',
        controller: 'MyProcessController'
      })

      .otherwise('/')
  }
})()
