angular.module('LoginModule', [])
.controller("LoginCtrl", function($scope, $location, $rootScope){
  $rootScope.loggedIn=false;
  $scope.showText=false;
  $scope.submit= function(){
    if($scope.uname=='admin' && $scope.pwd=='admin'){
      $rootScope.loggedIn=true;
      $location.path('/home');
    }else{
      $scope.showText=true;
      $rootScope.loggedIn=false;
    }
  };
});
