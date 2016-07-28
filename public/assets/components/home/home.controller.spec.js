describe('HomeController', function () {
  beforeEach(module('processTracker'))

  var $controller
  var $scope

  beforeEach(inject(function (_$controller_, _$rootScope_) {
    $controller = _$controller_
    $scope = _$rootScope_.$new()
  }))

  it('should get $scope.articles from articleManager.loadAllArticles at construction', function () {
    $controller('HomeController', {
      $scope: $scope
    })

    expect($scope.people).toEqual(['herp', 'derp'])
  })
})
