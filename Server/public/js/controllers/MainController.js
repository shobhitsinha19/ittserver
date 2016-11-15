app.controller("regCtrl",['$scope', '$http',function($scope,$http){
$scope.reg=function(){
	var data=({
		name: $scope.firstName,
		regno: $scope.password
	});
	$http.post('http://localhost:3000/signup', data)
}

}])
