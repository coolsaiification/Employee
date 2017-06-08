angular.module('EmployeeServiceModule', [])
.service("EmployeeService", function($http){
  var employeeService={};
  employeeService.employees=[];

  $http.get('data.json').then(function(response){
    employeeService.employees= response.data;
  });

  employeeService.findById=function(no){
    for(var item in employeeService.employees){
      if(employeeService.employees[item].no==no){
        return employeeService.employees[item];
      }
    }
  };

  return employeeService;

});
