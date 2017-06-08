angular.module("HomeModule", ['EmployeeServiceModule'])
.controller("HomeCtrl", function($scope, EmployeeService, $location){

  $scope.employees= EmployeeService.employees;
  $scope.$watch(function(){
    return EmployeeService.employees;
  }, function(employees){
    $scope.employees=employees;
  });

  $scope.actionOnDoubleClick=function(employee){
    var index=EmployeeService.employees.indexOf(employee);
    EmployeeService.employees.splice(index,1);
  };

});
