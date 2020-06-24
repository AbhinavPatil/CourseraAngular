(function(){
  'use strict';
  angular.module("Lunchchecker",[])

  .controller("LunchCheckController",Lunchchecker);

  Lunchchecker.$inject=['$scope'];

  function Lunchchecker($scope){
    $scope.name='';
    $scope.allowance='';
    $scope.array=[''];
    $scope.Style = { };
    $scope.Style1 = { };


    $scope.check=function(){
        $scope.array = $scope.name.split(",");
        $scope.array=$scope.array.filter(function(ele){return ele!=''});

      if($scope.array.length==0)
      {
        $scope.allowance="Please enter data first";
        $scope.Style.color= "red";
        $scope.Style1.border= "1px solid red";
      }
      else if($scope.array.length<=3){
        $scope.allowance="Enjoy!";
        $scope.Style.color= "green";
        $scope.Style1.border= "1px solid green";
      }
      else{
        $scope.allowance="Too Much!";
        $scope.Style.color = "red";
        $scope.Style1.border= "1px solid red";
      }
    };
}


})();
