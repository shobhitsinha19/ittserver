app.controller("regCtrl",['$scope', '$http',function($scope,$http){
$scope.reg=function(){
	var data=({
		fname: $scope.firstName,
		lname:$scope.lastName,
		email:$scope.email,
		pass: $scope.password
	});
	$http.post('http://localhost:3000/signup', data).then(function success(res){
		console.log("IN");
		console.log(data);
		console.log(res);
	},function failure(res){
		console.log("error");
	})
}

}])

app.controller("loginCtrl",['$scope','$http',function($scope, $http){
	$scope.login=function(){
		var data=({
			email:$scope.email,
			pass:$scope.password
		});
		$http.post('http://localhost:3000/login',data).then(function success(res){
			console.log("IN");
			console.log(res);
		},function failure(res){
			console.log("error");
		}) ;
	}
}])

app.controller("dashCtrl",["$scope","$http",function($scope,$http){
	
	$scope.translate=function(data){
		$scope.textresult="data";
		var x=$scope.textresult;
		console.log(x);
		var key="AIzaSyB43GXWNd_l3F3pWfjXQsFcF0eklSICKKA";
		$http.post("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20161118T212409Z.1d6f7d973aa055f5.4072ba4c9e49d9ce53d6ec237be33c12a54ff244&text="+x+"&lang=en-ru")
		.then(function(res){
			console.log(res);
		})
	}


}])
