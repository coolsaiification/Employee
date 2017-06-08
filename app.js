var app= angular.module("myApp", ['angular.filter', 'ngRoute', 'HomeModule', 'EditModule', 'AddModule', 'LoginModule'] );

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/',{
      templateUrl: "views/login.html",
      controller: "LoginCtrl"
    })
    .when('/home',{
      resolve: {
        "check": function($location, $rootScope){
          if(!$rootScope.loggedIn){
            $location.path('/');
          }
        }
      },
      templateUrl: "views/home.html",
      controller: "HomeCtrl"
    })
    .when('/edit/:id', {
      resolve: {
        "check": function($location, $rootScope){
          if(!$rootScope.loggedIn){
            $location.path('/');
          }
        }
      },
      templateUrl: "views/edit.html",
      controller: "EditCtrl"
    })
    .when('/add', {
      resolve: {
        "check": function($location, $rootScope){
          if(!$rootScope.loggedIn){
            $location.path('/');
          }
        }
      },
      templateUrl: "views/add.html",
      controller: "AddCtrl"
    })
    .otherwise({
      redirectTo: '/'
    });

});

app.directive("displayEmployees", function(){
  return{
    restrict: 'E',
    templateUrl: "templates/displayEmployees.html"
  }
});

app.directive("editEmployees", function(){
  return{
    restrict: 'E',
    templateUrl: "templates/editEmployees.html"
  }
});

app.directive("addEmployees", function(){
  return{
    restrict: 'E',
    templateUrl: "templates/addEmployees.html"
  }
});
