app.controller("regCtrl",['$scope', '$http',function($scope,$http){
$scope.reg=function(){
	var data=({
		fname: $scope.firstName,
		lname:$scope.lastName,
		email:$scope.email,
		pass: $scope.password
	});
	$http.post('http://localhost:3000/signup', data)
}

}])

app.controller("loginCtrl",['$scope','$http',function($scope, $http){
	$scope.login=function(){
		var data=({
			email:$scope.email,
			pass:$scope.password
		});
		$http.post('http://localhost:3000/login',data);
	}
}])
