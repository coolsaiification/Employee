angular.module("AddModule", [])
.controller("AddCtrl", function($scope, EmployeeService, $location){

  $scope.employee = {};
  var employees= EmployeeService.employees;
  $scope.matched= false;

  $scope.save=function(){
    $scope.matched=false;
    angular.forEach(employees,function(eachMovie){
      if($scope.employee.no == eachMovie.no){
        $scope.matched=true;
      };
    });
    if(!$scope.matched){
      EmployeeService.employees.push($scope.employee);
      $location.path('/home');
    };
  };

});
