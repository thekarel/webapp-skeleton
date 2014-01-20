'use strict';

describe('theApp', function() {
  var scope;
  var oneCtrl;

  beforeEach(module('theApp'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrlOne = $controller('ctrlOne', {$scope: $rootScope});
  }))

  describe('ctrlOne', function() {
    it('sets the scope variable', function() {
      expect(scope.yourModel).toBe('simple');
    });
  })

})