angular.module("EditModule", ['EmployeeServiceModule'])
.controller("EditCtrl", function($scope, $routeParams, EmployeeService, $location){

  $scope.employee = {};

  (function(){
    $scope.employee= _.clone(EmployeeService.findById($routeParams.id));
  })();

  $scope.save=function(emp){
    var editedEmp=EmployeeService.findById($routeParams.id);
    editedEmp.name= emp.name;
    editedEmp.designation= emp.designation;
    editedEmp.salary= emp.salary;
    editedEmp.department= emp.department;
    $location.path('/home');
  };


});
